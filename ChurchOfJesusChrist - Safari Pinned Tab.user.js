// ==UserScript==
// @name         Safari Pinned Tab: ChurchOfJesusChrist.org
// @author       J.P. Cranford
// @version      1.2
// @description  Adds support for Safari's Pinned Tab and Touch Bar button to the Church's website.
// @match        *://*.churchofjesuschrist.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'mask-icon');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/fc311f4eb8552ff981b0d9d1d72bcfe426c0726e/churchofjesuschrist_white.svg');
    icon.setAttribute('color', '#006184');

    head.appendChild(icon);
});
