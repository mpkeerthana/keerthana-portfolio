const fs = require('fs');
const zlib = require('zlib');

function searchPDF(filePath, queries) {
  console.log(`\n=== Searching ${filePath} ===`);
  if (!fs.existsSync(filePath)) {
    console.log('File does not exist.');
    return;
  }
  const pdf = fs.readFileSync(filePath);
  let pos = 0;
  let streamCount = 0;

  while (true) {
    const streamStart = pdf.indexOf('stream', pos);
    if (streamStart === -1) break;

    let dataStart = streamStart + 6;
    if (pdf[dataStart] === 13) dataStart++;
    if (pdf[dataStart] === 10) dataStart++;

    const streamEnd = pdf.indexOf('endstream', dataStart);
    if (streamEnd === -1) break;

    const streamData = pdf.slice(dataStart, streamEnd);
    streamCount++;
    try {
      const decompressed = zlib.inflateSync(streamData);
      const text = decompressed.toString('binary');
      
      queries.forEach(query => {
        let idx = -1;
        while ((idx = text.toLowerCase().indexOf(query.toLowerCase(), idx + 1)) !== -1) {
          console.log(`Found "${query}" in stream #${streamCount} at pos ${idx}`);
          // Print surrounding context (60 characters before and after)
          const start = Math.max(0, idx - 60);
          const end = Math.min(text.length, idx + 60);
          console.log(`  Context: "${text.substring(start, end).replace(/\r?\n/g, ' ')}"`);
        }
      });
    } catch (err) {
      console.log(`Stream #${streamCount} decompression failed: ${err.message}`);
    }

    pos = streamEnd + 9;
  }
}

searchPDF('public/resume.pdf', ['linkedin', 'portfolio', 'github', 'keerthana']);
