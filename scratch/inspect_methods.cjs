const fs = require('fs');
const { PDFDocument, PDFArray } = require('pdf-lib');

async function main() {
  const pdfBytes = fs.readFileSync('public/resume.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPages()[0];
  const contentStreams = page.node.Contents();
  const ref = contentStreams instanceof PDFArray ? contentStreams.array[0] : contentStreams;
  const stream = pdfDoc.context.lookup(ref);
  
  console.log('Class name:', stream.constructor.name);
  console.log('Own properties:', Object.getOwnPropertyNames(stream));
  let proto = Object.getPrototypeOf(stream);
  while (proto) {
    console.log('Prototype class:', proto.constructor.name);
    console.log('Prototype methods:', Object.getOwnPropertyNames(proto));
    proto = Object.getPrototypeOf(proto);
  }
}

main().catch(console.error);
