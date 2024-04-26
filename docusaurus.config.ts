import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'KNIGHT',
  tagline: 'Nothing is impossible to a willing heart',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://Taozenanqwq.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'Taozenanqwq', // Usually your GitHub org/user name.
  projectName: 'Taozenanqwq.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'note'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
      defaultLanguage: 'typescript',
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' }
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line'
        }
      ]
    },
    navbar: {
      title: 'KNIGHT',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'CS',
          position: 'left',
          label: '计算机基础'
        },
        {
          type: 'docSidebar',
          sidebarId: 'FE',
          position: 'left',
          label: '前端'
        },
        {
          type: 'docSidebar',
          sidebarId: 'BE',
          position: 'left',
          label: '后端'
        },
        {
          type: 'docSidebar',
          sidebarId: 'DL',
          position: 'left',
          label: '深度学习'
        },
        { to: '/blog', label: '每日记录', position: 'left' }
      ]
    }
  } satisfies Preset.ThemeConfig
}

export default config
