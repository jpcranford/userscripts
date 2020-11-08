// ==UserScript==
// @name         Safari Pinned Tab: IMSLP
// @author       J.P. Cranford
// @version      1.0
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to IMSLP.
// @match        *://*.imslp.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/b32e21e872620773641bc7c87aeb17914cc90b9a/imslp.svg');
    icon.setAttribute('color', '#193965');

    head.appendChild(icon);
});
