const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const admZip = require('adm-zip'); // wait, let's see if we have adm-zip, or if we can use standard unzip / powershell, or let's use powershell to read the docx!

// Let's write a powershell script or use node to unzip the docx. Since node has no built-in zip support unless we write a zip reader or use powershell, let's use powershell to inspect docx text!
