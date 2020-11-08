// ==UserScript==
// @name         Apple Touch Icon: USAA
// @author       J.P. Cranford
// @version      1.0
// @description  Adds an Apple Touch Icon for USAA, using their mobile app icon.
// @match        *://*.usaa.com*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '246x246');
    icon.setAttribute('href', 'https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/c6/ba/cbc6bafa-9328-4698-81e2-8ec408d79512/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png');

    head.appendChild(icon);
});

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '492x492');
    icon.setAttribute('href', 'https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/c6/ba/cbc6bafa-9328-4698-81e2-8ec408d79512/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.png');

    head.appendChild(icon);
});
