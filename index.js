var bulk = require("bulk-require"); 
var files = bulk(__dirname, "*.js");

// now i need code that gives concat the modules object
var concat = require("concat"); 
// how from here