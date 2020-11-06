// ==UserScript==
// @name         Safari Pinned Tab: Twitch
// @version      1.1
// @description  Adds support for special pinned tab and Touch Bar bookmark buttons in Safari on macOS.
// @author       J.P. Cranford
// @include      http*://www.twitch.*
// @grant        none
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/twitch.svg');
    icon.setAttribute('color', '#9146FF');

    head.appendChild(icon);
});
