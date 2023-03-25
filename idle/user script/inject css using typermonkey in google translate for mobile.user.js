// ==UserScript==
// @name        hide-guardian-ad
// @include     https://translate.google.com/*
// @description Hides the Guardian social media frame
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle('.blue {background: #000;}');
console.log('ran');

_______________________________ or _________________________________

// ==UserScript==
// @name        hide-guardian-ad
// @include     https://translate.google.com/*
// @description Hides the Guardian social media frame
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.blue {background: #000;}');