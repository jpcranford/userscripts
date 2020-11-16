// ==UserScript==
// @name         Apple Touch Icon: Internet Archive
// @author       J.P. Cranford
// @version      1.0
// @description  Adds an Apple Touch Icon for the Internet Archive, using an unlinked image on their site.
// @match        *://*.archive.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '180x180');
    icon.setAttribute('href', 'https://archive.org/apple-touch-icon.png');

    head.appendChild(icon);
});
