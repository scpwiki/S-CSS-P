# S-CSS-P
*A stylesheet picker for The SCP Wiki.*

## Contributing

### Building

Development requires [Node.js](https://nodejs.org) and NPM:

```shell
sudo apt install nodejs npm
```

To build the extension:

```shell
npm run build
```

There is also `npm run dev` which will spawn a process that watches for changes and rebuilds the extension automatically.

The files that drive the extension are:

* `manifest.json` - This is read by browsers to let it know what permissions the extension needs, and where things like the extension options page and icons are. Note the `content_scripts` section that calls out `scpnet.org`, this is for the "interwiki" iframe provided by SCP-RU.
* `options.html` - This is the webpage that appears when you open the extension's options, and is the UI for setting preferences.
* `options.js` - This handles the loading and saving of preferences via the `chrome.storage.sync.get/set` API.
* `main.js` - This handles the injection of the stylesheets into the bottom of the `head` so they cascade correctly.

### Adding new styles

There are five available types of stylesheets to build:

1. Layouts (movement of elements around the page, margins and padding for big block-level stuff.
2. Colors (colors, background colors, border styles and colors, box shadows, menu images, and margins and padding for small item-level stuff.
3. Images (Primarily used to override the #header background url, but could also be used for other url-level replacements if they don't make sense in color)
4. Fonts (Uses an import from a trusted CDN like Google Fonts and overrides font-face appearance)
5. Ratings (Controls the visibility of the rating module)

They also cascade in that order, with layout injected first and ratings last. The site's extant stylesheets load before any of these, so any element not styled by one of the five will use the site's stylesheet, and finally the user-agent stylesheet as a fallback. This will affect the elements that may need `!important` set on them.

If you want a unified theme that touches more than one area, it needs to be broken out into different stylesheets. That means no `background-color:` selectors in a `.layouts.css` file and no `position:` stuff in a `.fonts.css` file.

If you add a stylesheet, you need to add a corresponding option line in `options.html`. The extension is not smart enough to do it dynamically and probably won't ever be due to an interest in keeping it small and lightweight.

There is also a `/img` folder where you put your thumbnail of the look of the thing. Dimensions are:

* Color: 275x225
* Font: 50px height
* Layout: 275x225 unless showing full-width, then 457x225
* Logo: 100x100
* Rating: 275x225

If you have assets that need to be loaded like alternate logos, please store them on http://www.scp-wiki.net/component:s-css-p which will require a wikidot login, or get them to me in some other manner and I will handle it. Do *not* link to imgur or some other image hosting service in your CSS.

## Overriding S-CSS-P

If you have a page that contains custom CSS and would like to alert users of S-CSS-P that they should consider disabling the extension, please edit the slug of your page into http://scp-wiki.net/component:s-css-p in the code block. This is not yet implemented but the next major milestone will include this capability.
