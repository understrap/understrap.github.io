# Functions.php Overrides

Most theme functionality is found in the `/inc` folder, which is an extension of `functions.php`. There are two ways to override the default functions that come in the parent theme: you can rewrite an individual function or you can override the entire file that contains it.

## Override a function

Every function in the `/inc` folder comes wrapped in a condition `function_exists()` check. This means you can define a function of the same name in your child theme - and that function will be overwritten.

## Override an entire file (not recommended)

Instead of overriding a single function, you can copy an entire file from the parent theme `/inc/` folder into the child theme `/inc/` folder to have it load instead. While this is possible, we do **not** recommend this method. 

**Warning**
If you override an entire file, be sure to include all of the functions that were in the original file, just to ensure there are no PHP errors due to missing functions. However, this will mean that your theme will miss out any *future* changes to this file, including new functionality that may be required for other template pieces in the parent theme.

## Overriding the parent theme customizer settings

You may want to 'hard-code' the theme settings when building a child theme. As of version 1.1, we include an example override in the `functions.php` file that forces our site to load Bootstrap 5 assets and templates only.

```php
function understrap_default_bootstrap_version( $current_mod ) {
	return 'bootstrap5';
}
add_filter( 'theme_mod_understrap_bootstrap_version', 'understrap_default_bootstrap_version', 20 );
```

In addition, we include a small alert at the top of the Theme Layout Settings panel to let the user know that some settings may not be functional:

> You are currently using an Understrap child theme, which may override some of these settings.