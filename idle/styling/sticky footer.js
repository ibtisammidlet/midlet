<script type='text/javascript'>
// <![CDATA[
document.addEventListener("DOMContentLoaded", function(event) { 
  var bohi = $(window).height();
  if(bohi < 1000) {
      $(".footer-credits").css("bottom","0px");
	  $(".footer-credits").css("position","absolute");
	  console.log("its less");
  } else {
      console.log("it's more");
  }    
});
// ]]>
</script>