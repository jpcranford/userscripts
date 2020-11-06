// ==UserScript==
// @name         Safari Pinned Tab: ChurchOfJesusChrist.org
// @author       J.P. Cranford
// @version      0.6
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to the Church's website.
// @match        *://*.churchofjesuschrist.*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://raw.githubusercontent.com/jpcranford/userscripts/main/sites/Q2h1cmNoT2ZKZXN1c0NocmlzdC5vcmc.svg');
    icon.setAttribute('color', '#01B6D1');
// blue 40: #003057
// blue 35: #005581
// Blue 30: #006184
// blue 25: #007d9f
// blue 20: #01b6d1 <<< current test
// plex: #cc7b19 (passes all but normal size AAA on dark)
    head.appendChild(icon);
});
