// ==UserScript==
// @name         Safari Pinned Tab: Twitch
// @author       J.P. Cranford
// @version      1.6.2
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to Twitch.
// @match        *://www.twitch.tv/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/b90d0877e9c66e6a1a3a3e340205767272d82d2e/twitch.svg');
    icon.setAttribute('color', '#9146FF');

    head.appendChild(icon);
});
