var sys = require('sys'),
  fs = require('fs'),
  im = require('./imagemagick');

var largeSrc = __dirname+'/sample-images/inspiration_mega.jpg';
var largeDst = __dirname+'/output-images/inspiration_mega.jpg';

var largeSrcData = fs.readFileSync(largeSrc);

console.log(largeSrcData);

im.resize({
  srcPath: largeSrc,
  width: 960,
  height: 960,
  quality: null
}, function (err, stdout, stderr) {
  console.log(err);
  console.log(stderr);
  fs.writeFileSync(largeDst, stdout, 'binary');
});