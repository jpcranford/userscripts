// ==UserScript==
// @name         Safari Pinned Tab: Pocket
// @version      1.0
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to Pocket.
// @author       J.P. Cranford
// @include      http*://app.getpocket.*
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/UG9ja2V0.svg');
    icon.setAttribute('color', '#EF4056');

    head.appendChild(icon);
});
