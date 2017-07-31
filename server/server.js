const path = require('path'); //built in module
const express = require('express');
const multer  = require('multer');

const storagePath = path.join(__dirname, '../tmp');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

//serve assets from public folder using static middleware
app.use(express.static(publicPath));

var storage = require('multer-gridfs-storage')({
   url: 'mongodb://localhost:27017/fileDatabase',
   metadata: function(req, file, cb) {
           cb(null, { originalName: file.originalname,
                      givenName: req.body.filename,
                      givenDescription: req.body.fileDescription,
                      contentType: file.mimetype,
                      dateCreated: file.uploadDate});
       }
});
// Set multer storage engine to the newly created object
var upload = multer({ storage: storage });

app.post('/', function (req, res) {
  upload.single('file')(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log('There was an error: ', err);
      res.status(404).send({
        success: false,
        message: "File was not uploaded."
      });
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
