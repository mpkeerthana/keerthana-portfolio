const fs = require('fs');
const { PDFDocument, PDFName, PDFArray, PDFDict } = require('pdf-lib');

async function inspectFile(label, path) {
  console.log(`\n=== ${label} (${path}) ===`);
  if (!fs.existsSync(path)) {
    console.log('File does not exist.');
    return;
  }
  const pdfBytes = fs.readFileSync(path);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  console.log(`Pages: ${pages.length}`);
  
  for (let p = 0; p < pages.length; p++) {
    console.log(`Page #${p}:`);
    const page = pages[p];
    const annots = page.node.get(PDFName.of('Annots'));
    if (!annots) {
      console.log('  No Annots array found.');
      continue;
    }
    
    if (annots instanceof PDFArray) {
      console.log(`  Found ${annots.size()} annotations.`);
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
            rectVals = rect.array.map(v => {
              if (v && typeof v.value === 'number') return v.value;
              if (v && typeof v.numberValue === 'function') return v.numberValue();
              return v ? v.toString() : '0';
            });
          }
          console.log(`  Annot #${i}: Subtype = ${subtype ? subtype.value : 'none'}, URI = "${uri}", Rect = [${rectVals.join(', ')}]`);
        }
      }
    } else {
      console.log('  Annots is not a PDFArray:', annots.toString());
    }
  }
}

async function main() {
  await inspectFile('Staged Resume', 'public/resume.pdf');
  await inspectFile('Root Resume Keerthana', 'resume-keerthana.pdf');
  await inspectFile('Downloads Keerthana 2', 'C:\\Users\\Admin\\Downloads\\resume-keerthana-2.pdf');
  await inspectFile('Downloads Purple Resume', 'C:\\Users\\Admin\\Downloads\\Purple and White Clean and Professional Resume.pdf');
}

main().catch(console.error);
