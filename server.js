const express = require('express');
const sharp = require('sharp');
const fs = require('fs'); 
const app = express();
const PORT = 3000;


//Static Pages
app.use(express.static('/'));


//Dynamic Server converting 100KB Image
app.get('/dynamicServer100kb', (req, res) => {
  
  fs.readFile('oneHundredKbImage.jpeg', (err, jpegData) => {
    sharp(jpegData)
      .png()
      .toBuffer()
      .then(pngData => {
        res.set('Content-Type', 'image/png');
        res.send(pngData);
      })
      .catch(sharpErr => {
        console.log("Error! Cannot Convert", sharpErr);
        res.send("Error");
      });
  });
});


//Dynamic Server converting 1MB Image
app.get('/dynamicServer1mb', (req, res) => {
  
  fs.readFile('oneMbImage.jpg', (err, jpegData) => {
    sharp(jpegData)
      .png()
      .toBuffer()
      .then(pngData => {
        res.set('Content-Type', 'image/png');
        res.send(pngData);
      })
      .catch(sharpErr => {
        console.log("Error! Cannot Convert", sharpErr);
        res.send("Error");
      });
  });
});



app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
  console.log("-------------------------------------------------");
  console.log("Test URLs:");
  console.log(`Static 100B Page: http://localhost:${PORT}/oneHundredBytePage.html`);
  console.log(`Static 1MB Page:  http://localhost:${PORT}/oneMbPage.html`);
  console.log(`Dynamic Server for 100KB Image: http://localhost:${PORT}/dynamicServer100kb`);
  console.log(`Dynamic Server for 1MB Image:  http://localhost:${PORT}/dynamicServer1mb`);
});