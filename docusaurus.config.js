// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Power\'s Wiki',
  tagline: '^_^',
  url: 'https://wiki-power.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
  organizationName: 'linyuxuanlin', // Usually your GitHub org/user name.
  projectName: 'Wiki_Docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-152900803-1',
          anonymizeIP: false,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/',
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: false,
          editUrl: 'https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/',
          blogSidebarCount: 8,
          postsPerPage: 8,
          path: 'blog',
          blogSidebarTitle: 'Recent',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }, ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        // The application ID provided by Algolia
        appId: 'IRO903CONI',

        // Public API key: it is safe to commit it
        apiKey: '884c4ae3f56335ab485f3c366a9911ce',

        indexName: 'wiki-power',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

      //sidebarCollapsible: true, //默认折叠
      image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',



      navbar: {
        title: 'Power\'s Wiki',
        hideOnScroll: false,
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/

        items: [{
            to: "blog",
            label: "博客",
            position: "right",
          },
          /*
          {
            href: "https://wiki.wildwolf.pw/",
            label: "队内知识库",
            position: "right",
          },
          */
          {
            href: "http://digest.wiki-power.com/",
            label: "书摘",
            position: "right",
          },
          {
            href: "https://nav.wiki-power.com/",
            label: "友链 & 导航站",
            position: "right",
          },
        ],
      },

      /*
      footer: {
        style: 'dark',
        links: [{
            title: 'Docs',
            items: [{
              label: 'Tutorial',
              to: '/docs/intro',
            }, ],
          },
          {
            title: 'Community',
            items: [{
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [{
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },*/
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;