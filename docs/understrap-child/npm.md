# NPM and the Build Process

Understrap uses [npm](https://www.npmjs.com/) as manager for dependency packages like Bootstrap and Underscores. And it uses tools like [rollup.js](https://www.rollupjs.org/) and [postCSS](https://postcss.org) as taskrunners to compile .scss code into .css, minify .js code, etc. The following chapter describes the usage and workflow.

## Preparations: Install node.js

At first you need node.js installed on your computer globally. If you already done this before skip this section. If not: You have to install node.js (comes along with npm) before you can proceed.
To install node.js visit the node.js website for the latest installer for your OS. Download and install it like any other program, too.

We also recommend using [NVM - Node Version Manager](https://github.com/nvm-sh/nvm) to keep closer control over your version of node.js and switch between versions.

## Installing dependencies

- Make sure you have installed Node.js and Browser-Sync* (* optional, if you wanna use it) on your computer globally
- Then open your terminal and browse to the location of your Understrap copy
- Run: `npm install`

## Running

To work and compile your Sass files on the fly start:

```bash
npm run watch
```

Or, to run with Browser-Sync:

First change the browser-sync options to reflect your environment in the file `/src/build/browser-sync.config.js` in the beginning of the file:

```javascript
module.exports = {
	"proxy": "localhost/", // Change here
	"notify": false,
	"files": ["./css/*.min.css", "./js/*.min.js", "./**/*.php"]
};
```

Replace `localhost/theme_test/` with the URL to your local WordPress test environment.
For example if you run MAMP and your WordPress installation is placed in a htdocs subfolder called `/understrap` you have to add `localhost:8888/understrap`. Its the same URL you have to type in to see your local WordPress installation. Then run: 

```bash
npm run watch-bs
```

## Overriding Default Styles and Scripts

First we must run the watcher process which is responsible to track file changes and compile these changes to the final CSS file which in turn WordPress loads. From the terminal and while in project root directory type `npm run watch`. You might see something like this:

```bash
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/js/**/*
[nodemon] watching extensions: js
[nodemon] to restart at any time, enter `rs`
[nodemon] starting `npm-run-all js`
[nodemon] watching path(s): sass/**/*
[nodemon] watching extensions: scss
[nodemon] starting `npm-run-all css`
```

Leave the terminal open with the command running as is.

Add your own CSS styles to `/src/sass/theme/_child_theme.scss` or import your own files into `/src/sass/theme/_child-theme.scss`

To overwrite Bootstrap's or Understrap's base variables just add your own value to:`/src/sass/theme/_child_theme_variables.scss`

For example, the "$primary" variable is used by both Bootstrap and Understrap.

Add your own color like: `$primary: #ff6600;` in `/src/sass/theme/_child_theme_variables.scss` to overwrite it. This change will automatically apply to all elements that use the $primary variable.

By saving the file you should see in terminal something like the following:

```bash
[nodemon] restarting due to changes...
[nodemon] starting `npm-run-all css`
```

Reload the page and you should be able to see the new style applied.

It will be outputted into: `/css/child-theme.min.css` and `/css/child-theme.css`

So you have one clean CSS file at the end and just one request.

Add your own JS to `/src/js/custom-javascript.js` to have them bundled into `/js/child-theme.js`.

## Dist Commands

The child theme includes three commands for creating a distributable copy of your child theme. 

### dist

```bash
npm run dist
```

This command will run both the `css` and the `js` commands to create the final compiled and minified versions of your scripts and stylesheets. It will give the same final result as running those commands separately, or running `watch` and saving a file. 

### dist-build

```bash
npm run dist-build
```

This command creates a `/dist/` directory inside your child theme and populates it with a distributable version of your child theme. This version does not include any development files or features, such as the `package.json` and the entire `/src/` folder, meaning that another user wouldn't be able to modify and rebuild the stylesheets or javascript files.

By default, the `/dist/` is included in the .gitignore file and is not version controlled. 

### dist-clean


```bash
npm run dist-clean
```

This command deletes the newly-created `/dist` directory.