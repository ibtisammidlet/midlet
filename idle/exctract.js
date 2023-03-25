$(".n.bm.cc").each(myFunction);

function myFunction() {
  var str = $(this).html();
  var patt = /fbid=([^_]+)/g;
  var result = patt.exec(str);
console.log(result);
};