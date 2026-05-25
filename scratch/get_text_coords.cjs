const fs = require('fs');
const { PDFDocument, PDFName, PDFContentStream, PDFOperator, PDFNumber } = require('pdf-lib');

async function main() {
  const pdfBytes = fs.readFileSync('public/resume.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPages()[0];
  
  // Get all content streams
  const contentStreams = page.node.Contents();
  const streams = Array.isArray(contentStreams) ? contentStreams : [contentStreams];
  
  console.log(`Found ${streams.length} content streams.`);
  
  // Track graphics state (position, transform matrix, text matrix)
  let x = 0, y = 0;
  let tx = 0, ty = 0;
  let textMatrix = [1, 0, 0, 1, 0, 0]; // [a, b, c, d, e, f]
  
  for (let s = 0; s < streams.length; s++) {
    const stream = pdfDoc.context.lookup(streams[s]);
    const operators = PDFContentStream.of(stream).operators;
    
    console.log(`Stream #${s} has ${operators.length} operators.`);
    
    for (let i = 0; i < operators.length; i++) {
      const op = operators[i];
      const name = op.name;
      
      // Text matrix operators:
      // BT: Begin Text (resets text matrix)
      if (name === 'BT') {
        textMatrix = [1, 0, 0, 1, 0, 0];
      }
      // Td: Move text position
      else if (name === 'Td') {
        const txOp = op.args[0];
        const tyOp = op.args[1];
        if (txOp instanceof PDFNumber && tyOp instanceof PDFNumber) {
          textMatrix[4] += txOp.value();
          textMatrix[5] += tyOp.value();
        }
      }
      // TD: Move text position and set leading
      else if (name === 'TD') {
        const txOp = op.args[0];
        const tyOp = op.args[1];
        if (txOp instanceof PDFNumber && tyOp instanceof PDFNumber) {
          textMatrix[4] += txOp.value();
          textMatrix[5] += tyOp.value();
        }
      }
      // Tm: Set text matrix
      else if (name === 'Tm') {
        textMatrix = op.args.map(arg => arg instanceof PDFNumber ? arg.value() : 0);
      }
      // Tj: Show text
      else if (name === 'Tj') {
        const arg = op.args[0];
        const textStr = arg.toString();
        const posX = textMatrix[4];
        const posY = textMatrix[5];
        if (textStr.includes('linkedin') || textStr.includes('portfolio') || textStr.includes('gmail') || textStr.includes('github') || textStr.includes('http')) {
          console.log(`Tj: text = ${textStr}, x = ${posX.toFixed(2)}, y = ${posY.toFixed(2)}, matrix = [${textMatrix.join(', ')}]`);
        }
      }
      // TJ: Show text with spacing
      else if (name === 'TJ') {
        const arg = op.args[0];
        const textStr = arg.toString();
        const posX = textMatrix[4];
        const posY = textMatrix[5];
        if (textStr.includes('linkedin') || textStr.includes('portfolio') || textStr.includes('gmail') || textStr.includes('github') || textStr.includes('http')) {
          console.log(`TJ: text = ${textStr}, x = ${posX.toFixed(2)}, y = ${posY.toFixed(2)}, matrix = [${textMatrix.join(', ')}]`);
        }
      }
    }
  }
}

main().catch(console.error);
