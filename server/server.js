const path = require('path'); //built in module
const express = require('express');
const multer  = require('multer');

const storagePath = path.join(__dirname, '../tmp');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
//serve assets from public folder using static middleware
app.use(express.static(publicPath));

var storage = multer.diskStorage({ //store files onserver in /tmp/uploads folder
  destination: function (req, file, cb) {
    cb(null, storagePath);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage }).single('file');

app.post('/', function (req, res) {
  console.log('hitting post');
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log('There was an error: ', err);
      res.status(404).send({});
      return;
    }
    // Everything went fine
    console.log(req);
    res.json({
      success: true,
      message: "File uploaded"
    });
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
