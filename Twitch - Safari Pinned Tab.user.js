// ==UserScript==
// @name         Safari Pinned Tab: Twitch
// @author       J.P. Cranford
// @version      1.5
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to Twitch.
// @match        *://www.twitch.tv/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/VHdpdGNo.svg');
    icon.setAttribute('color', '#9146FF');

    head.appendChild(icon);
});
