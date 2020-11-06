// ==UserScript==
// @name         Safari Pinned Tab: YouTube
// @author       J.P. Cranford
// @version      1.2
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to YouTube.
// @match        *://*.youtube.com*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/WW91VHViZQ.svg');
    icon.setAttribute('color', '#FF0000');

    head.appendChild(icon);
});
