// ==UserScript==
// @name         Apple Touch Icon: Pocket
// @author       J.P. Cranford
// @version      1.1
// @description  Adds an Apple Touch Icon for all pages on Pocket, using their mobile app icon.
// @match        *://*.getpocket.com*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '230x230');
    icon.setAttribute('href', 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/04/bc/4804bcb3-e7d2-2272-3b6d-79436277b4eb/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/230x0w.png');

    head.appendChild(icon);
});

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '460x460');
    icon.setAttribute('href', 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/04/bc/4804bcb3-e7d2-2272-3b6d-79436277b4eb/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/460x0w.png');

    head.appendChild(icon);
});
