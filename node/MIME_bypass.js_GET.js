<div id="MIME_bypass"></div>

<script>$(document).ready(function() {

    return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      if (this.status == 200) {
        document.getElementById("MIME_bypass").innerHTML = this.responseText;

//** edit1: now works try catch inside each other, where you do something with the fatched html
            
      } else {
        reject(new Error("Failed to fetch MIME bypass data."));
      }
    });
    xhr.open("GET", "https://raw.githubusercontent.com/ibtisammidlet/biotune/main/subbind/frontend/index.html", true);
    xhr.send();
  });
 
});</script>

<!-- the only way t make it fully works is using eval, otherwise:
inline onlick works, where onkeyup, addeventlisternetner, and all other event handeler don't work
this been tested with doc ready from the fatcher, to awaitelement before it, both don't work -->