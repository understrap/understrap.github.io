# Theme Structure

The Understrap framework follows the standard WordPress conventions for locating files and folders. To modify anything via a child theme, just copy a file from the parent theme to it's corresponding location in the child theme and it will be overridden. 

## Folder Layout

- `/css` - The final stylesheets. These are generated via gulp and should never be modified directly.
- `/fonts` - Local copies of FontAwesome 4 webfonts.
- `/global-templates` - Template pieces that aren't specifically related to the WordPress loop.
- `/inc` - Important theme-specific functionality is included here. Think of this as your expanded `functions.php` file. 
- `/js` - The final javascript files. These are generated via gulp and should never be modified directly.
- `/languages` - Translation files.
- `/loop-templates` - Template files for the content area of pecific post types, like posts and pages.
- `/page-templates` - Custom landing page templates that override the sidebars, headers, etc.
- `/sass` - The source of our stylesheets. To make updates to the final css, you'll want to modify the files in here.
- `/sidebar-templates` - Template files for sidebars and widget areas.
- `/src` - The source of our javascript files as well as a few sass dependencies (Bootstrap and FontAwesome). 
- `/woocommerce` - Template files for WooCommerce layouts.

## The /includes/ Directory

- `/inc/theme-settings.php` - Initialize theme default settings.
- `/inc/setup.php` - Theme setup and custom theme supports.
- `/inc/widgets.php` - Register widget area.
- `/inc/enqueue.php` - Enqueue scripts and styles.
- `/inc/template-tags.php` - Custom template tags for this theme.
- `/inc/pagination.php` - Custom pagination for this theme.
- `/inc/hooks.php` - Custom hooks.
- `/inc/extras.php` - Custom functions that act independently of the theme templates.
- `/inc/customizer.php` - Customizer additions.
- `/inc/custom-comments.php` - Custom Comments file.
- `/inc/class-wp-bootstrap-navwalker.php` - Load custom WordPress nav walker. Trying to get deeper navigation? Check out: https://github.com/understrap/understrap/issues/567.
- `/inc/editor.php` - Load Editor functions.
- `/inc/deprecated.php` - Load deprecated functions.

## The /sass/ Directory

- `/sass/assets` - These files are designed to specicially load third party libraries from the `/src` folder.
- `/sass/theme` - Theme-specific css files. Use this folder to override Bootstrap variables or add your own designs.
- `/sass/understrap` - Contains theme-specific css files for Understrap, along with Woocommerce templates. 
- `/sass/theme.scss` - This file calls in all scss files to generate one front-end stylesheet from all of the various assets.
- `/sass/custom-editor-style.scss` - This file is available to load styles into the backend editor and block editor areas.

## The /src/ Directory

- `/src/js` - This file contains the javascript files needed for the front-end. You can modify `custom-javascript.js` and it will be compiled into your javascript.
- `/src/sass` - Local copies of Bootstrap and FontAwesome. This allows us to compile them without referencing the `node_modules` folder.
