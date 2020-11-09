// ==UserScript==
// @name         Safari Pinned Tab: Internet Archive
// @author       J.P. Cranford
// @version      1.0
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to the Internet Archive.
// @match        *://*.archive.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/23cbd09d98176bc1d4cb72834698811c12d151a8/internetarchive.svg');
    icon.setAttribute('color', '#222222');

    head.appendChild(icon);
});
