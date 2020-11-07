// ==UserScript==
// @name         Safari Pinned Tab: Musescore
// @author       J.P. Cranford
// @version      1.0
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to Musescore.
// @match        *://musescore.com*
// @match        *://musescore.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/fc311f4eb8552ff981b0d9d1d72bcfe426c0726e/musescore.svg');
    icon.setAttribute('color', '#1f74bd');

    head.appendChild(icon);
});
