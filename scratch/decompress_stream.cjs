const fs = require('fs');
const zlib = require('zlib');
const { PDFDocument, PDFArray } = require('pdf-lib');

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
    const compressedBytes = stream.getContents(); // Or raw contents
    console.log(`Stream #${s} compressed size: ${compressedBytes.length} bytes.`);
    
    // Check if it's zlib compressed (starts with 0x78 0x9c)
    let decompressed;
    if (compressedBytes[0] === 0x78 && compressedBytes[1] === 0x9c) {
      console.log(`Stream #${s} is zlib compressed. Decompressing...`);
      decompressed = zlib.inflateSync(compressedBytes);
    } else {
      console.log(`Stream #${s} is not zlib compressed. Trying decompression anyway...`);
      try {
        decompressed = zlib.inflateSync(compressedBytes);
      } catch (err) {
        console.log(`Decompression failed, using raw bytes: ${err.message}`);
        decompressed = compressedBytes;
      }
    }
    
    const content = Buffer.from(decompressed).toString('binary');
    fs.writeFileSync(`scratch/decompressed_stream_${s}.txt`, content);
    console.log(`Wrote decompressed stream #${s} to scratch/decompressed_stream_${s}.txt (${content.length} chars).`);
  }
}

main().catch(console.error);
