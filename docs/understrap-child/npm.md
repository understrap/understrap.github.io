---
sidebar_position: 2
---

# NPM and Gulp

UnderStrap uses npm as manager for dependency packages like Bootstrap and Underscores. And it uses Gulp as taskrunner, for example to compile .scss code into .css, minify .js code etc. The following chapter describes the usage and workflow.

## Preparations: Install node.js and Gulp

At first you need node.js and Gulp installed on your computer globally. If you already done this before skip this section. If not: You have to install node.js (comes along with npm) and Gulp before you can proceed.
To install node.js visit the node.js website for the latest installer for your OS. Download and install it like any other program, too.

To install Gulp open up your terminal, enter:

`npm install --global gulp-cli` 

and hit enter.

Now you have node.js and Gulp installed globally.

## Installing dependencies

- Make sure you have installed Node.js and Browser-Sync* (* optional, if you wanna use it) on your computer globally
- Then open your terminal and browse to the location of your UnderStrap copy
- Run: `npm install`

## Running

To work and compile your Sass files on the fly start:

- `gulp watch`

Or, to run with Browser-Sync:

- First change the browser-sync options to reflect your environment in the file /gulpconfig.json in the beginning of the file:

```json
"browserSyncOptions" : {
	"proxy": "localhost/theme_test/", // <----- CHANGE HERE
	"notify": false
},
```

- Replace `localhost/theme_test/` with the URL to your local WordPress test environment.
For example if you run MAMP and your WordPress installation is placed in a htdocs subfolder called `/understrap` you have to add `localhost:8888/understrap`. Its the same URL you have to type in to see your local WordPress installation.
- then run: `gulp watch-bs`

### A more detailed example of working with SCSS - Npm - Gulp 

This little how to is for Linux - OS X users how currently know how to clone the project from Github. If not check [this tutorial here](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners). Assumptions: you have cloned project's source and you want to start styling various parts of the theme. Additionally you have Node.js installed on your system, if not [check here how to do it](https://nodejs.org/en/download/package-manager/).

1.  Go to project's root directory
2.  Install project's toolchain and dependencies by typing `npm install`. When this command completes, you should be able to see a new directory named `node_modules` under project's root directory (`understrap/node_modules`)
3.  Move various needed libraries from `node_modules` where installed with `npm install` to project's root directory by typing `gulp copy-assets`. When this command complete, you should be able to see a new directory named `src` under project's root directory (`understrap/src`).

We the above prerequisites complete, you are now ready to start developing - styling your copy of Understrap. For this guide, we will do the following:

-   create a SCSS variable
-   see how to nest style rules
-   use the variable to change navbar's link colors
-   see how to reference parent selector while nesting rules to handle a hover event

#### Running the watcher

First we must run the watcher process which is responsible to track file changes and compile these changes to the final CSS file which in turn WordPress loads. From the terminal and while in project root directory type `gulp watch`. You should see something like the following:

```
stef@dev:understrap$ gulp watch
[13:06:47] Using gulpfile ~/projects/php/wordpress/wp-content/themes/understrap/gulpfile.js
[13:06:47] Starting 'watch'...
[13:06:47] Finished 'watch' after 12 ms
```

leave the terminal open with the command running as is.

#### Styling the theme

With the watcher running, open the SCSS file `understrap/sass/theme/_theme.scss` and paste the following, (you should also read the code comments):

```
// SCSS Syntax http://sass-lang.com/documentation/file.SASS_REFERENCE.html#css_extensions

// variable declaration in SCSS we use variables to keep style clean and easy to modify
// if we use this variable to say 50 rules and want to change the color, we would change only this variable.
$mycolor: #67A6A6;

// in SCSS we nest
nav {
  // in CSS this was selected by nav a
  a {
    color: $mycolor !important;
    // change a on hover example
    // in CSS this was selected by nav a:hover
    &:hover {
      color: $brand-primary !important;
    }
  }
}
```

by saving the file you should see in terminal something like the following:

```
[13:15:22] Starting 'sass'...
[13:15:22] Finished 'sass' after 1.36 ms
[13:15:22] Starting 'cleancss'...
[13:15:22] Finished 'cleancss' after 2.81 ms
[13:15:22] Starting 'cssnano'...
[13:15:23] Finished 'cssnano' after 737 ms
```

reload the page and you should be able to see the new style applied.