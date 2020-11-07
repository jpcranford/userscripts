// ==UserScript==
// @name         Safari Pinned Tab: D&D Beyond
// @author       J.P. Cranford
// @version      1.0
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to D&D Beyond.
// @match        *://*.dndbeyond.com/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/d3fba4d83e82d1af063caaa176afe13492261d62/dndbeyond.svg');
    icon.setAttribute('color', '#E40712');

    head.appendChild(icon);
});
