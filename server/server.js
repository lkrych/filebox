const path = require('path'); //built in module
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
//serve assets from public folder using static middleware
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
