const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Power's Wiki",
  //titleDelimiter: "🦖", // Defaults to `|`
  tagline: "啥都玩的斜杠青年",
  url: "https://wiki-power.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png",
  //organizationName: "linyuxuanlin", // Usually your GitHub org/user name.
  //projectName: "Wiki_Docusaurus", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true, //默认折叠
    image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
    algolia: {
      apiKey: "5c07d8bf9c9928c4453857f6cad0420e",
      indexName: "wiki-power",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    
    colorMode: {
      // "light" | "dark"
      //defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        lightIcon: '🌞',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        //lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    hideableSidebar: true,
    navbar: {
      title: "Power's Wiki",
      hideOnScroll: true,
      //style: 'primary',
      /*
      logo: {
        alt: "My Site Logo",
        src:
          "https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122195819.png",
      },
      */
      items: [
        {
          href: "https://wiki.wildwolf.tech/",
          label: "队内知识库",
          position: "right",
        },
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
  },

  stylesheets: [
    {
      href: '/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl: "https://github.com/linyuxuanlin/Wiki_Docusaurus/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};