# Getting Started

If you're planning on developing a custom theme, we recommend using the [Child Starter Theme](https://github.com/understrap/understrap-child). These docs will take you through setup for your local development, as well as some of the common customizations you might need to make.

Understrap Child Theme shares with the parent theme all PHP files and adds its own functions.php on top of the Understrap parent theme's functions.php.

IT DOES NOT LOAD THE PARENT THEMES CSS FILE(S)! Instead it uses the Understrap Parent Theme as a dependency via npm and compiles its own CSS file from it.

Understrap Child Theme uses the Enqueue method to load and sort the CSS file the right way instead of the old @import method.

## Installation

1. Install the parent theme Understrap first: https://github.com/understrap/understrap or https://wordpress.org/themes/understrap/
IMPORTANT: If you download Understrap from GitHub make sure you rename the "understrap-master.zip" file to "understrap.zip" or you might have problems using this child theme!
1. Upload the understrap-child folder to your wp-content/themes directory
1. Go into your WP admin backend
1. Go to "Appearance -> Themes"
1. Activate the Understrap Child theme

## Install via Git and npm

Open your terminal and browse to the location where you want to install Understrap child theme. Same directory you installed Understrap (usually in your /wp-content/themes):

`cd path/to/location/`

If needed create the proper folder:

`mkdir understrap-child`

Now pull in the Understrap child theme via GitHub with:

`git clone https://github.com/understrap/understrap-child.git`

Install all dependencies by running this command in the Understrap folder `cd understrap-child`:

`npm install`
