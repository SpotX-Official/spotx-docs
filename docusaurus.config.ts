import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "SpotX",
  tagline: "A Multi-Purpose Ad-Blocker",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://SpotX-Official.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/spotx-docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SpotX-Official", // Usually your GitHub org/user name.
  projectName: "spotx-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // id: 'product', // omitted => default instance
          path: "guide",
          routeBasePath: "guide",
          editUrl: "https://github.com/SpotX-Official/spotx-docs/edit/main/",
          sidebarPath: "./sidebars.ts",
          // ... other options
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "faq",
        path: "faq",
        routeBasePath: "faq",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/SpotX-Official/spotx-docs/edit/main/",
        // ... other options
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/text_logo.png",
    navbar: {
      title: "SpotX",
      logo: {
        alt: "SpotX logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          position: "left",
          label: "Guide",
        },
        {
          type: "docSidebar",
          sidebarId: "faqSidebar",
          position: "left",
          label: "FAQ",
          docsPluginId: "faq",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/SpotX-Official",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Quick Start",
              to: "/guide/quickstart",
            },
            {
              label: "Installation",
              to: "/guide/installation-guide/hello",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/SpotX-Official",
            },
          ],
        },
      ],
      copyright: `Made with &hearts; by SpotX team, ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["batch", "powershell"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
