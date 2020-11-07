// ==UserScript==
// @name         Safari Pinned Tab: Pocket
// @author       J.P. Cranford
// @version      1.12
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
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/62d41c5a2c4743f216666541b468ec89bccc11fb/pocket.svg');
    icon.setAttribute('color', '#EF4056');

    head.appendChild(icon);
});
