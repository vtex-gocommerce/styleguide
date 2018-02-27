'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = './lib/';
var impComponents = [];
var expComponents = [];

var walk = function walk(dir, done) {
  _fs2.default.readdir(dir, function (error, list) {
    if (error) {
      return done(error);
    }

    var i = 0;

    (function next() {
      var file = list[i++];

      if (!file) {
        return done(null);
      }

      _fs2.default.stat(dir + file, function (error, stat) {
        if (stat && stat.isDirectory()) {
          walk(dir + file, function (error) {
            return next();
          });
        } else {
          console.log('Importing & Exporting: ' + file);
          impComponents.push('import ' + file + ' from \'' + dir + '/' + file + '\'');
          expComponents.push('exports.' + file + ' = ' + file);
          next();
        }
      });
    })();
  });
};

process.argv.forEach(function (val, index, array) {
  if (val.indexOf('source') !== -1) {
    path = val.split('=')[1];
  }
});

walk(path, function (error) {
  if (error) {
    throw error;
  } else {
    var content = '';

    impComponents.forEach(function (el) {
      content += el + '\n';
    });

    content += '\n';

    expComponents.forEach(function (el) {
      content += el + '\n';
    });

    _fs2.default.writeFile('./src/index.js', content, function (err) {
      if (err) {
        console.log(err);
      }
    });
    console.info('Finished...');
  }
});