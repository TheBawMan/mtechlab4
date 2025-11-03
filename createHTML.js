const fs = require('fs');
const path = require('path');


const targetSize = 1024*1024; 
const filePath = path.join(__dirname, '/', 'oneMbPage.html');

const line = "<p>Hi, This is Chinku. Hello from Server.</p>\n";
const lineSize = Buffer.byteLength(line, 'utf8');
const numLines = Math.ceil(targetSize / lineSize);

const stream = fs.createWriteStream(filePath);
stream.write('<html>\n<head><title>Test Page</title></head>\n<body>\n');

for (let i = 0; i < numLines; i++) {
  stream.write(line);
}
stream.write('</body>\n</html>\n');
stream.end();
