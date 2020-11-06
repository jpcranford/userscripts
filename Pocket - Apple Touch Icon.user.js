// ==UserScript==
// @name         Apple Touch Icon: Pocket
// @version      0.5
// @description  Adds an Apple Touch Icon for all pages on Pocket, using their own hosted icon.
// @author       J.P. Cranford
// @include      http*://app.getpocket.*
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '144x144');
    icon.setAttribute('href', 'https://getpocket.com/i/apple-touch-icon/Pocket_AppIcon_@144.png');

    head.appendChild(icon);
});
