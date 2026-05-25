const fs = require('fs');
const { PDFDocument, PDFName, PDFArray } = require('pdf-lib');

async function main() {
  const pdfBytes = fs.readFileSync('public/resume.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPages()[0];
  
  const contentStreams = page.node.Contents();
  const streams = contentStreams instanceof PDFArray 
    ? contentStreams.array.map(ref => pdfDoc.context.lookup(ref))
    : [pdfDoc.context.lookup(contentStreams)];
    
  console.log(`Found ${streams.length} content streams.`);
  
  for (let s = 0; s < streams.length; s++) {
    const stream = streams[s];
    const bytes = stream.getContents();
    const content = Buffer.from(bytes).toString('binary');
    
    fs.writeFileSync(`scratch/stream_${s}.txt`, content);
    console.log(`Wrote stream #${s} to scratch/stream_${s}.txt.`);
  }
}

main().catch(console.error);
