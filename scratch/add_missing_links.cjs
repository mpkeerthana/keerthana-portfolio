const fs = require('fs');
const { PDFDocument, PDFName, PDFString, PDFArray, PDFDict } = require('pdf-lib');

async function main() {
  const pdfBytes = fs.readFileSync('public/resume.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPages()[0];
  
  // Create LinkedIn link annotation
  const linkedinAnnot = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Link',
    Rect: [68, 722, 282, 748],
    Border: [0, 0, 0], // Invisible border
    C: [0, 0, 1],
    A: {
      Type: 'Action',
      S: 'URI',
      URI: PDFString.of('https://www.linkedin.com/in/keerthanamp/'),
    },
  });
  const linkedinRef = pdfDoc.context.register(linkedinAnnot);

  // Create Portfolio link annotation
  const portfolioAnnot = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Link',
    Rect: [288, 722, 527, 748],
    Border: [0, 0, 0], // Invisible border
    C: [0, 0, 1],
    A: {
      Type: 'Action',
      S: 'URI',
      URI: PDFString.of('https://keerthana-portfolio-2y3y.onrender.com'),
    },
  });
  const portfolioRef = pdfDoc.context.register(portfolioAnnot);

  // Get or create Annots array on the page
  let annots = page.node.get(PDFName.of('Annots'));
  if (!annots) {
    annots = pdfDoc.context.obj([]);
    page.node.set(PDFName.of('Annots'), annots);
  }
  
  if (annots instanceof PDFArray) {
    annots.push(linkedinRef);
    annots.push(portfolioRef);
    console.log(`Added 2 new annotations to the page.`);
  } else {
    console.error('Annots is not a PDFArray!');
  }

  // Save the modified PDF
  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/resume.pdf', modifiedPdfBytes);
  console.log('Saved modified PDF to public/resume.pdf');
}

main().catch(console.error);
