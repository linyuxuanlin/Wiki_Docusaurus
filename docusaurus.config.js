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

  //scripts: [
  //  'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/embed.js',
  //  'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/autoFitIframe.js'
  //],

  themes: [
    // ... Your other themes.
    /*
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],*/
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-152900803-1',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-N2MCBBXJ0F', //Fork 我的仓库，请把这个改成你自己的
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
          //blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 8,
          path: 'blog',
          blogSidebarTitle: 'Recent',
          feedOptions: {
            type: 'all',
            title: 'Power\'s Blog',
            description: 'Power\'s Wiki 的博客 RSS',
            copyright: `Copyright © ${new Date().getFullYear()} Power Lin.`,
          },
        },

        sitemap: {
          changefreq: 'always',
          priority: 1.0,
          //ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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

        apiKey: '5c07d8bf9c9928c4453857f6cad0420e',//?02bd2340879bdb682f2a9fe509fec240
        indexName: 'wiki-power', //

        // The application ID provided by Algolia
        appId: 'BH4D9OD16A', //BH4D9OD16A 是默认的，文档见 https://autocomplete-experimental.netlify.app/docs/docsearchmodal/#appid，用自己的 ID IRO903CONI 反而搜不出内容 

        // Public API key: it is safe to commit it
        // apiKey: 'defe7fd8690822eed8e3c94801bab286',

        // indexName: 'wiki-power',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

      //sidebarCollapsible: true, //默认折叠

      metadata: [{
        name: 'keywords',
        content: 'ATE, hardware, STM32, Arduino, NAS, software, blog'
      }],

      image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Power\'s Wiki',
        hideOnScroll: true,
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/



        items: [{
            to: "硬件与半导体",
            label: "硬件与半导体",
            position: "right",
          },
          {
            to: "嵌入式与软件",
            label: "嵌入式与软件",
            position: "right",
          },
          {
            to: "效率指南",
            label: "效率指南",
            position: "right",
          },

          {
            to: "blog",
            label: "博客",
            position: "right",
          },

          {
            href: "https://github.com/linyuxuanlin/Wiki_Docusaurus",
            position: "right",
            className: "header-github-link",
            'aria-label': "GitHub repository",
          },


        ],
      },


      footer: {
        style: 'light',


        links: [

          {
            href: "https://nav.wiki-power.com/",
            label: "友链 & 导航站",
          },
          {
            href: "http://digest.wiki-power.com/",
            label: "书摘",
          },
          {
            label: '资源仓库',
            href: 'https://github.com/linyuxuanlin/File-host',
          },

          /*
          {
            label: '电源设计方案收集',
            href: 'https://github.com/linyuxuanlin/Collection_of_Power_Module_Design',
          },
          {
            href: "https://wiki.wildwolf.pw/",
            label: "机器人队知识库",
          },
          {
            label: '功能电路模块化',
            href: 'https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit',
          },
          
          {
            label: '网页版串口助手',
            href: 'https://serial.wiki-power.com/',
          },
          {
            label: 'Markdown 转公众号编辑器',
            href: 'https://md2wechat.wiki-power.com/',
          },
          */
        ],


        //copyright: `by Power Lin | 粤 ICP 备 20014898 号 | Built with Docusaurus.`,
      },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;