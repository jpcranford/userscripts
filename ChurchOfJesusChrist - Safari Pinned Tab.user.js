// ==UserScript==
// @name         Safari Pinned Tab: ChurchOfJesusChrist.org
// @author       J.P. Cranford
// @version      1.1
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to the Church's website.
// @match        *://*.churchofjesuschrist.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/simplified_black.svg');
    icon.setAttribute('color', '#006184');

    head.appendChild(icon);
});

// TODO: Move file hosting to Dropbox for privacy and to keep logos under "private use only"
