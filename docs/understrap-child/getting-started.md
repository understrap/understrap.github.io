# Getting Started

If you're planning on developing a custom theme, we recommend using the [Child Starter Theme](https://github.com/understrap/understrap-child). These docs will take you through setup for your local development, as well as some of the common customizations you might need to make.

Understrap Child Theme shares with the parent theme all PHP files and adds its own functions.php on top of the UnderStrap parent theme's functions.php.

IT DOES NOT LOAD THE PARENT THEMES CSS FILE(S)! Instead it uses the UnderStrap Parent Theme as a dependency via npm and compiles its own CSS file from it.

Understrap Child Theme uses the Enqueue method to load and sort the CSS file the right way instead of the old @import method.

## Installation

1. Install the parent theme UnderStrap first: https://github.com/understrap/understrap or https://wordpress.org/themes/understrap/
IMPORTANT: If you download UnderStrap from GitHub make sure you rename the "understrap-master.zip" file to "understrap.zip" or you might have problems using this child theme!
1. Upload the understrap-child folder to your wp-content/themes directory
1. Go into your WP admin backend
1. Go to "Appearance -> Themes"
1. Activate the UnderStrap Child theme
