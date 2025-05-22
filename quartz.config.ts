import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌿💻 The Packets Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "carloslramirez.com/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        //header: "Schibsted Grotesk",
        //header: "Playfair Display",
        //header: "Lora",
        //body: "Source Sans Pro",
        //body: "JetBrains Mono",
        //body: "Work Sans",
        //code: "Source Code Pro",
        header: "Ubuntu",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
  lightMode: {
    light: "#fef6e3",        // base (Latte)
    lightgray: "#f5e0dc",    // subtle surface
    gray: "#9ca3af",         // neutral gray
    darkgray: "#4c4f69",     // text emphasis
    dark: "#1e1e2e",         // stronger text or accents
    secondary: "#d20f39",    // red accent (Catppuccin Red)
    tertiary: "#f2cdcd",     // light red/pink highlight
    highlight: "rgba(210, 15, 57, 0.1)", // soft red highlight
    textHighlight: "#d20f39cc",  // red text highlight
  },
  darkMode: {
    light: "#24273a",        // base (Macchiato)
    lightgray: "#1e2030",    // surface
    gray: "#cad3f5",         // muted text
    darkgray: "#a5adcb",     // title/subtitle
    dark: "#f4f4f5",         // strong text
    secondary: "#f5a97f",    // flamingo accent
    tertiary: "#f0c6c6",     // lighter flamingo
    highlight: "rgba(245, 169, 127, 0.15)", // soft flamingo highlight
    textHighlight: "#f5a97faa",  // flamingo text highlight
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
          light: "material-theme", // or "light-plus"
          dark: "material-theme-darker", // or "monokai", "tokyo-night", "material-theme-palenight"
        },
        keepBackground: true,
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
        rssFullHtml: true,
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
