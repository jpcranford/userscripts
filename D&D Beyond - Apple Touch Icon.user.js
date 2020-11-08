// ==UserScript==
// @name         Apple Touch Icon: D&D Beyond
// @author       J.P. Cranford
// @version      1.0
// @description  Adds an Apple Touch Icon for D&D Beyond.
// @match        *://*.dndbeyond.com/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '120x120');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/d3fba4d83e82d1af063caaa176afe13492261d62/dndbeyond-appletouchicon-120.png');

    head.appendChild(icon);
});

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '180x180');
    icon.setAttribute('href', 'https://gist.githubusercontent.com/jpcranford/3248724523eb9290a96175fae33268f6/raw/9c0f9b22c066f4ac8c2c5faa4a834dff50cbee06/dndbeyond-appletouchicon-180.png');

    head.appendChild(icon);
});
