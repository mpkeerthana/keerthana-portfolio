import fs from 'fs';
import zlib from 'zlib';

function extractCleanPDFText(filePath) {
  const pdf = fs.readFileSync(filePath);
  let pos = 0;
  let textBlocks = [];

  while (true) {
    const streamStart = pdf.indexOf('stream', pos);
    if (streamStart === -1) break;

    let dataStart = streamStart + 6;
    if (pdf[dataStart] === 13) dataStart++;
    if (pdf[dataStart] === 10) dataStart++;

    const streamEnd = pdf.indexOf('endstream', dataStart);
    if (streamEnd === -1) break;

    const streamData = pdf.slice(dataStart, streamEnd);
    try {
      const decompressed = zlib.inflateSync(streamData);
      const text = decompressed.toString('binary');
      
      // Look for strings inside parentheses (...)
      const matches = text.match(/\(([^)]+)\)/g);
      if (matches) {
        matches.forEach(m => {
          const clean = m.slice(1, -1).trim();
          // Filter to keep only readable text (alphanumeric, spaces, common punctuation)
          // and reject binary trash
          if (clean.length > 2 && /^[a-zA-Z0-9\s.,:\-@\/_()'+#]+$/.test(clean)) {
            textBlocks.push(clean);
          }
        });
      }
    } catch (err) {
      // Ignore
    }

    pos = streamEnd + 9;
  }
  
  console.log([...new Set(textBlocks)].join(' | '));
}

console.log('=== public/resume.pdf ===');
extractCleanPDFText('public/resume.pdf');

console.log('\n=== resume-keerthana.pdf ===');
extractCleanPDFText('resume-keerthana.pdf');
