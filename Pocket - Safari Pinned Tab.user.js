// ==UserScript==
// @name         Safari Pinned Tab: Pocket
// @author       J.P. Cranford
// @version      1.5
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to Pocket.
// @icon         https://app.getpocket.com/favicon.ico
// @match        *://*.getpocket.com*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @updateURL    https://raw.githubusercontent.com/jpcranford/userscripts/main/Pocket%20-%20Safari%20Pinned%20Tab.user.js
// @run-at       document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.head.id;
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/UG9ja2V0.svg');
    icon.setAttribute('color', '#EF4056');

    head.appendChild(icon);
});
