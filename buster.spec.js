var buster = require("buster"),
  imagemagick = require('./imagemagick.js'),
  fs = require('fs'),
  filesArray = [];

buster.spec.expose();
buster.testRunner.timeout = 10000;

var walk = function(path) {
  fs.readdirSync(path).forEach(function(file) {
    file = path + '/' + file;
    var stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      walk(file);
    } else {
      filesArray.push(file);
    }
  });
};

walk('./sample-images');

describe('Testing files: ', function() {
  filesArray.forEach(function(file) {
    it("should not return undefined on identifiy", function (next) {
      imagemagick.identify(file, function (err, features) {
        expect(features).not.toEqual(undefined);    
        next();
      });
    });    
  });
});