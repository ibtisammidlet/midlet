<div id="MIME_bypass"></div>

<script>
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("MIME_bypass").innerHTML = this.responseText;

      }
    };
    xhr.open("GET", "https://raw.githubusercontent.com/ibtisammidlet/biotune/main/subbind/frontend/index.html", true);
    xhr.send();
</script>

<!-- the only way t make it fully works is using eval, otherwise:
inline onlick works, where onkeyup, addeventlisternetner, and all other event handeler don't work
this been tested with doc ready from the fatcher, to awaitelement before it, both don't work -->