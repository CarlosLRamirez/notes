import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌿 The Packets Garden",
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
          light: "#ffffff",                // page background
          lightgray: "#f0f0f0",            // subtle borders
          gray: "#999999",                 // secondary text
          darkgray: "#555555",             // headings/subtitles
          dark: "#000000",                 // strong text
          secondary: "#1a73e8",            // links or accent (blue)
          tertiary: "#ffc107",            // highlights (yellow)
          highlight: "rgba(26, 115, 232, 0.1)", // background highlight
          textHighlight: "#ffc107cc",     // inline text highlight
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
