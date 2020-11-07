// ==UserScript==
// @name         Apple Touch Icon: ChurchOfJesusChrist.org
// @author       J.P. Cranford
// @version      1.0
// @description  Adds an Apple Touch Icon for all pages on the Church's main site, using images from their Facebook page.
// @match        *://*.churchofjesuschrist.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '120x120');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/apple-touch-icon-120x120.png');

    head.appendChild(icon);
});

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '180x180');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/apple-touch-icon-180x180.png');

    head.appendChild(icon);
});

// TODO: Move file hosting to Dropbox for privacy and to keep logos under "private use only"
// FIXME: The favicon for the site bookmark isn't showing in the sidebar. Write a user script to fix this?
