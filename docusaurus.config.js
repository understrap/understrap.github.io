const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Understrap Docs',
  tagline: 'Bootstrap + Underscores Framework',
  url: 'https://understrap.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/understrap-logo-site-icon.png',
  organizationName: 'understrap', // Usually your GitHub org/user name.
  projectName: 'understrap.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
    //   title: 'Understrap',
      logo: {
        alt: 'Understrap Logo',
        src: 'img/understrap-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Start Here',
        },
        {
          href: 'https://understrap.com/demos',
          label: 'Demos',
		  position: 'right',
        },
        {
          href: 'https://github.com/understrap/understrap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/_understrap',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/understrap/understrap/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://understrap.com/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/understrap/understrap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Understrap. Built with Docusaurus. Proudly managed by howarddc.com`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/understrap/understrap-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
