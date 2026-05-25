const fs = require('fs');
const { PDFDocument, PDFName, PDFArray, PDFDict } = require('pdf-lib');

async function inspectPageAnnotations() {
  const pdfBytes = fs.readFileSync('public/resume.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPages()[0];
  
  const annots = page.node.get(PDFName.of('Annots'));
  if (!annots) {
    console.log('No Annots array found on page 0.');
    return;
  }
  
  console.log(`Annots type: ${annots.constructor.name}`);
  if (annots instanceof PDFArray) {
    console.log(`Found ${annots.size()} annotations.`);
    for (let i = 0; i < annots.size(); i++) {
      const ref = annots.get(i);
      const annot = pdfDoc.context.lookup(ref);
      if (annot instanceof PDFDict) {
        const subtype = annot.get(PDFName.of('Subtype'));
        const rect = annot.get(PDFName.of('Rect'));
        const action = annot.get(PDFName.of('A'));
        let uri = '';
        if (action instanceof PDFDict) {
          const uriObj = action.get(PDFName.of('URI'));
          if (uriObj) uri = uriObj.value;
        }
        let rectVals = [];
        if (rect instanceof PDFArray) {
          rectVals = rect.array.map(v => v.value);
        }
        console.log(`Annot #${i}: Subtype = ${subtype ? subtype.value : 'none'}, URI = "${uri}", Rect = [${rectVals.join(', ')}]`);
      }
    }
  } else {
    console.log('Annots is not a PDFArray:', annots.toString());
  }
}

inspectPageAnnotations().catch(console.error);
