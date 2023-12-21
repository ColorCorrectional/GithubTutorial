import { defineConfig } from 'vitepress'

const nav = [
  { text: "Home", link: "/" },
  { text: "API", link: "/markdown-examples" }
];

const sidebar = [
  {
    text: "Previews",
    items: [
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "Runtime API Examples", link: "/api-examples" }
    ]
  },
  {
    text: "My Examples",
    items: [
      { text: "Page-1", link: "/my-examples/page-1" }
    ]
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Github Tutorial Repository",
  description: "The understanding of Vitepress.",
  // base: '/GithubTutorial/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/ColorCorrectional/GithubTutorial" }
    ]
  }
})
