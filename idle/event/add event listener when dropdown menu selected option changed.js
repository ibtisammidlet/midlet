//** change selectQuality with drowpdown menu select id
function start(){
      document.getElementById("selectQuality").addEventListener("change", addActivityItem, false);
      }

function addActivityItem(){
      //option is selected
      alert("yeah");
}

window.addEventListener("load", start, false);