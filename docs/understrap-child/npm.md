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

## Overriding Default Styles and Scripts

First we must run the watcher process which is responsible to track file changes and compile these changes to the final CSS file which in turn WordPress loads. From the terminal and while in project root directory type `gulp watch`. You should see something like the following:

```
stef@dev:understrap$ gulp watch
[13:06:47] Using gulpfile ~/projects/php/wordpress/wp-content/themes/understrap/gulpfile.js
[13:06:47] Starting 'watch'...
[13:06:47] Finished 'watch' after 12 ms
```

leave the terminal open with the command running as is.

Add your own CSS styles to `/sass/theme/_child_theme.scss` or import you own files into `/sass/theme/understrap-child.scss`

To overwrite Bootstrap's or Understrap's base variables just add your own value to:`/sass/theme/_child_theme_variables.scss`

For example, the "$brand-primary" variable is used by both Bootstrap and UnderStrap.

Add your own color like: `$brand-primary: #ff6600;` in `/sass/theme/_child_theme_variables.scss` to overwrite it. This change will automatically apply to all elements that use the $brand-primary variable.

By saving the file you should see in terminal something like the following:

```
[13:15:22] Starting 'sass'...
[13:15:22] Finished 'sass' after 1.36 ms
[13:15:22] Starting 'cleancss'...
[13:15:22] Finished 'cleancss' after 2.81 ms
[13:15:22] Starting 'cssnano'...
[13:15:23] Finished 'cssnano' after 737 ms
```

Reload the page and you should be able to see the new style applied.

It will be outputted into: `/css/understrap-child.min.css` and `/css/understrap-child.css`

So you have one clean CSS file at the end and just one request.

Add your own JS files to `src/js/` to have them bundled into child-theme.js.
