# Installation

There are four ways to install Understrap: Via WordPress theme installer, via ZIP upload, via SFTP or with Git & npm.

## 1. Installation via WordPress theme installer

Understrap is available via [wordpress.org](https://wordpress.org/themes/understrap/). Means you can install it from your WordPress backend as any other theme, too.

Click on `Appearance -> Themes` in your WordPress backend, hit the "Add New" button and search for "Understrap". Hit the "install" button and wait a moment. Understrap will be installed on your server. Now activate Understrap. Go again to `Appearance -> Themes` and hit the "Activate" button below the Understrap screenshot.

## 2. Installation via Upload

Understrap is available as .zip archive at [Understrap.com](https://understrap.com). Download it and store it on your local HDD.

Open your WordPress backend and click on `Appearance -> Themes`, hit the "Add New" button followed by the "Upload Theme" button.

Select the previously stored .zip file from your HDD and upload it. The WordPress install routine will run automatically right after it.

## 3. Manually via SFTP

Follow step 2 but extract the freshly downloaded understrap.zip file on your local HDD. Now connect via SFTP to your server, browse to the `/wp-content/themes` directory of your WordPress installation and upload the `/understrap` folder to it.

## 4. Install via Git and npm

Open your terminal and browse to the location where you want to install Understrap:

`cd path/to/location/`

If needed create the proper folder:

`mkdir understrap `

Now pull in Understrap via GitHub with:

`git clone https://github.com/understrap/understrap.git`

At the end install all dependencies by this command:

`npm install`

