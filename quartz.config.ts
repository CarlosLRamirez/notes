import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "My Digital Jungle",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "carloslramirez.com/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        //header: "Schibsted Grotesk",
        header: "Playfair Display",
        //header: "Lora",
        //body: "Source Sans Pro",
        body: "JetBrains Mono",
        //body: "Work Sans",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#fdfdfd",                // page background
          lightgray: "#e6e8ec",            // subtle borders
          gray: "#b0b4ba",                 // secondary text
          darkgray: "#5a5e66",            // headings/subtitles
          dark: "#2b2d30",                 // strong text
          secondary: "#3e64ff",           // links or accent (blue)
          tertiary: "#ffbc42",            // highlights (yellow-orange)
          highlight: "rgba(62, 100, 255, 0.1)", // background highlight
          textHighlight: "#ffbc42cc",     // inline text highlight
        },
        darkMode: {
          light: "#1c1e21",                // main background
          lightgray: "#2c2f33",           // code blocks / UI
          gray: "#6b7280",                // muted text
          darkgray: "#d1d5db",            // brighter headings
          dark: "#f3f4f6",                // strong text
          secondary: "#7f5af0",           // links/accent (purple-blue)
          tertiary: "#ffd803",            // highlight / tags
          highlight: "rgba(127, 90, 240, 0.15)", // highlight block
          textHighlight: "#ffd803aa",     // inline text highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          //light: "github-light",
          //dark: "github-dark",
          light: "light-plus", // or "light-plus"
          dark: "monokai", // or "monokai", "tokyo-night", "material-theme-palenight"
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      //Plugin.RemoveDrafts(),
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
