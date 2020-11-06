// ==UserScript==
// @name         Safari Pinned Tab: YouTube
// @version      1.0
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to YouTube.
// @author       jpcranford
// @include      http*://www.youtube.*
// @grant        none
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/WW91VHViZQ.svg');
    icon.setAttribute('color', '#FF0000');

    head.appendChild(icon);
});
