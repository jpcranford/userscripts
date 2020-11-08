// ==UserScript==
// @name         Apple Touch Icon: Plex
// @author       J.P. Cranford
// @version      1.0
// @description  Currently, the touch icon for app.plex.tv is their white icon on a black background. Their main site, www.plex.tv, has a touch icon with their yellow icon. This script changes all touch icons for *.plex.tv to that one.
// @match        *://*.plex.tv/*
// @supportURL   https://github.com/jpcranford/userscripts/issues
// @run-at document-start
// ==/UserScript==

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '144x144');
    icon.setAttribute('href', 'https://www.plex.tv/wp-content/themes/plex/assets/img/favicons/apple-touch-icon-144x144.png');

    head.appendChild(icon);
});

window.addEventListener("load", function() {
    var head = document.getElementsByTagName('head')[0];
    var icon = document.createElement('link');

    icon.setAttribute('rel', 'apple-touch-icon');
    icon.setAttribute('sizes', '152x152');
    icon.setAttribute('href', 'https://www.plex.tv/wp-content/themes/plex/assets/img/favicons/apple-touch-icon-152x152.png');

    head.appendChild(icon);
});
