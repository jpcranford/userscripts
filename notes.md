# Notes
Website, Branding page, Hex Color, `href` value

* Twitch, https://brand.twitch.tv/brand/, #9146FF, `data:image/svg+xml;base64,PHN2ZyBpZD0iYjI4NTZmZmYtZmU3Mi00NWYwLTgxMzgtM2E2MzVkOTU3MjFiIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNCwwLDEuMTQsMi44NlYxMy4xNEg0LjU3VjE2bDIuODYtMi44Nkg5LjcxTDE0Ljg2LDhWMFptOS43Miw3LjQzTDExLjQzLDkuNzFIOS4xNGwtMiwydi0ySDQuNTdWMS4xNGg5LjE1Wk0xMiwzLjE0SDEwLjg2VjYuNTdIMTJabS0zLjE0LDBINy43MVY2LjU3SDguODZaIi8+PC9zdmc+`

This one works: [Base64 Encoder](https://base64.guru/converter/encode/image/svg)

### Avoiding a "light mode" background in Safari's Dark Mode
It has something to do with the color and the contrast ratio to the background. A [testing tool](https://color.a11y.com/?wc3) for WCAG 2.1 color constrast was used for the following tests.

As far as I've seen, no "dark backing" happens when a color is too light in Light Mode.

#### Against a dark background (#000000)
| Color   | Used by/Name | Rating,<br>Regular Size | Rating,<br>Large Size | Light backing?                     |
|---------|--------------|-------------------------|-----------------------|------------------------------------|
| #01b6d1 | Blue 20      | AAA                     | AAA                   | No (but hard to see in light mode) |
| #007d9f | Blue 25      | —                       | AA                    | Yes                                |
| #006184 | Blue 30      | —                       | AA                    |                                    |
| #005581 | Blue 35      | —                       | —                     |                                    |
| #003057 | Blue 40      | —                       | —                     |                                    |
| #cc7b19 | Plex         | AA                      | AAA                   | No                                 |
| #9146FF | Twitch       | AA                      | AAA                   | No                                 |
| #FF0000 | YouTube      | AA                      | AAA                   | No                                 |
| #006bc4 | 5eTools      | —                       | AA                    | Yes                                |
| #EF4056 | Pocket       | AA                      | AAA                   | No                                 |
| #000000 | GitHub       | —                       | —                     | Yes                                |
