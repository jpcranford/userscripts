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
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/62d41c5a2c4743f216666541b468ec89bccc11fb/churchofjesuschrist.svg');
    icon.setAttribute('color', '#006184');

    head.appendChild(icon);
});
