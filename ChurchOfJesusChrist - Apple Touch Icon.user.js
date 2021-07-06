// ==UserScript==
// @name         Apple Touch Icon: ChurchOfJesusChrist.org
// @author       J.P. Cranford
// @version      1.1
// @description  Adds an Apple Touch Icon for all pages on the Church's main site, using images from their Facebook page.
// @match        *://*.churchofjesuschrist.org/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @homepageURL	 https://github.com/jpcranford/userscripts
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '120x120');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/3cff5465837b1c4a1862520efe3b6e0ffce1d820/churchofjesuschrist-appletouchicon-120.png');

    head.appendChild(icon);
});

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '180x180');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/3cff5465837b1c4a1862520efe3b6e0ffce1d820/churchofjesuschrist-appletouchicon-180.png');

    head.appendChild(icon);
});
