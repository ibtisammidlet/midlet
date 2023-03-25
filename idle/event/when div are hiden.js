//** listen if slide div is hiden to start redirect to needed url
document.addEventListener("DOMContentLoaded", function(event) { 
var observer = new MutationObserver(function(mutations) {
    console.log('div hide event fired!');
  });
  var target = document.querySelector('.well');
  observer.observe(target, {
    attributes: true
  });
});