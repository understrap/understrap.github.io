# Common Issues

This page serves as a collection of common issues when setting up Understrap. Please use the link at the bottom to suggest any additional items.

**The language flags of the menu items of the Polylang plugin are not visible.**

If you're not seeing the language flags for Polylang, this has been discussed here [Issue #1305](https://github.com/understrap/understrap/issues/1305)

**npm ERR! Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (93)**

We recommend running `node -v` to check on what version of Node you're running. Node-sass seems requires node be v14 or below.