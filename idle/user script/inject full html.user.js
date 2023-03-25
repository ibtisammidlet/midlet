// ==UserScript==
// @name        instantube
// @include     file:///D:/New%20folder%20(2)/yt%20dw.html
// @description instant youtube downloader by ibtisam_midlet
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

$("body").append ( `
    <script>
     var pageURL = $(location).attr("href");
$( "#tobe-replaced" ).load( "https://trackmeup.000webhostapp.com/youtube-downloader/getvideo.php?videoid=" + pageURL + "#new-projects" );


</script>
` );