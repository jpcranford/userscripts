// ==UserScript==
// @name         Safari Pinned Tab: Pocket
// @author       J.P. Cranford
// @version      1.11
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to Pocket.
// @match        *://*.getpocket.com*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @updateURL    https://raw.githubusercontent.com/jpcranford/userscripts/main/Pocket%20-%20Safari%20Pinned%20Tab.user.js
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/UG9ja2V0.svg');
    icon.setAttribute('color', '#EF4056');

    head.appendChild(icon);
});

// TODO: Move file hosting to Dropbox for privacy and to keep logos under "private use only"
