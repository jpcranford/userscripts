# Notes

Website, Branding page, Hex Color, `href` value

-   Twitch, <https://brand.twitch.tv/brand/>, #9146FF

This one works: [Base64 Encoder](https://base64.guru/converter/encode/image/svg)

### Avoiding a "light mode" background in Safari's Dark Mode

It has something to do with the color and the contrast ratio to the background. A [testing tool](https://color.a11y.com/?wc3) for WCAG 2.1 color constrast was used for the following tests.

As far as I've seen, no "dark backing" happens when a color is too light in Light Mode.

#### Against a dark background (#000000)

| Color   | Used by/Name     | Rating,<br>Regular Size | Rating,<br>Large Size | Contrast Ratio | Light backing?                     |
| ------- | ---------------- | ----------------------- | --------------------- | -------------- | ---------------------------------- |
| #01b6d1 | Blue 20          | AAA                     | AAA                   | 8.61:1         | No (but hard to see in light mode) |
| #cc7b19 | Plex             | AA                      | AAA                   | 6.41:1         | No                                 |
| #EF4056 | Pocket           | AA                      | AAA                   | 5.53:1         | No                                 |
| #FF0000 | YouTube          | AA                      | AAA                   | 5.25:1         | No                                 |
| #9146FF | Twitch           | AA                      | AAA                   | 4.52:1         | No                                 |
| #007d9f | Blue 25          | —                       | AA                    | 4.43:1         | Yes                                |
| #E40712 | D&D Beyond       | —                       | AA                    | 4.33:1         | No                                 |
| #1f74bd | Musescore        | —                       | AA                    | 4.29:1         |                                    |
| #006bc4 | 5eTools          | —                       | AA                    | 3.9:1          | Yes                                |
| #006184 | CoJC             | —                       | AA                    | 3.04:1         | Yes                                |
| #005581 | Blue 35          | —                       | —                     | 2.61:1         |                                    |
| #aa0000 | AnyDice          | —                       | —                     | 2.7:1          | Yes                                |
| #193965 | IMSLP            | —                       | —                     | 1.81:1         |                                    |
| #003057 | Blue 40          | —                       | —                     | 1.56:1         |                                    |
| #0E2E49 | USAA             | —                       | —                     | 1.5:1          | Yes                                |
| #222222 | Internet Archive | —                       | —                     | 1.31:1         |                                    |
| #121212 | D&D Beyond       | —                       | —                     | 1.12:1         |                                    |
| #000000 | GitHub           | —                       | —                     | 1:1            | Yes                                |

<!-- TODO: Pinned Tab: TamperMonkey (ugly white lining around favicon) -->

<!-- TODO: Touch Icon: Internet Archive (curves all wrong on current)-->
