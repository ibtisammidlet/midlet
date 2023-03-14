var bulk = require(‘bulk-require’); 
var files = bulk(__dirname, ‘*.js’);

module.exports = files;