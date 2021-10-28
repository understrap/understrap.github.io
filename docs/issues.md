# Common Issues

This page serves as a collection of common issues when setting up Understrap. Please use the link at the bottom to suggest any additional items.

#### The language flags of the menu items of the Polylang plugin are not visible.

If you're not seeing the language flags for Polylang, this has been discussed here [Issue #1305](https://github.com/understrap/understrap/issues/1305)

---

#### npm ERR! Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (93)

We recommend running `node -v` to check on what version of Node you're running. Node-sass seems requires node be v14 or below.

Running `npm rebuild node-sass` and then `npm install` can also sometimes correct this error.

---

#### Whenever I add a submenu, my parent menu item link shows a hashtag instead of the URL.

This is a default behavior of Understrap. Because the dropdown menu needs a 'click' to trigger it, the theme removes the link from the parent item. If it were a link, it would open the link instead of showing dropdown when you click it.
​
If you do want to override that behavior, it requires using code to override the nav menu walker that generates the menu.

You'll want to make a copy of main class in the `/inc/class-wp-bootstrap-navwalker.php` file in your child theme. Then you'll want to comment out or remove [line 193](https://github.com/understrap/understrap/blob/main/inc/class-wp-bootstrap-navwalker.php#L193) which overwrites the `$atts['href']` value with the `#` symbol. 

We'd also recommend adding some styles that will show the dropdown menu automatically when a user hovers over it, like so:

```css
.nav-item.dropdown:hover .dropdown-menu {
	display: block;
}
```

---

#### My console.log() output is not showing up.

When we compile the javascript, we use rollup to put everything into child-theme.js. Then we use terser to minify that into child-theme.min.js. That second process removes all `console.log()` calls from happening on your live site's javascript. 

However, if you want to see your console output, you can either:
1. change your functions.php file to load the non-minified version while you're developing (child-theme.js instead of child-theme.min.js) OR
2. change the setting in /src/build/terser.config.json on line 7 that says `"drop_console":true` to `"drop_console":false` which will keep all the console log stuff in the final minified JS file.

---

#### FontAwesome needs display:swap

To remove the pagespeed warning about FontAwesome's icon font not using the `display:swap` property, you can add it to the `@font-face` declaration in `src/sass/assets/fontawesome/_path.scss` and then compile the css with `npm run css`. 

