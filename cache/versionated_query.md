So if you have these files on your server:

ExJS.js
ExCSS.css
and change them to:

ExJS.js?v=1.01
ExCSS.css?v=1.01
the new version of these files will load in any browser.

Normally, a browser will always load the HTML file from the server, but there are some HTML meta tags you can use to make sure that the most recent HTML version will load for any user:

<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
There are also ways to make sure that files in other languages always load the most recent version as well, which is discussed on this post:

How to add version number to HTML file (not only to css and js files)

<!-- https://stackoverflow.com/a/42583775/9611678 -->