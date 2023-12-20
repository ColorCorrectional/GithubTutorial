import { defineConfig } from 'vitepress';

const nav = [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' }
];

const sidebar = [
  {
    text: 'stuff here..',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/repo/',
  title: "Github Tutorial Test Page",
 // description: "my first general github site (made with vitepress)",
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ColorCorrectional/GithubTutorial' }
    ]
  }
});
