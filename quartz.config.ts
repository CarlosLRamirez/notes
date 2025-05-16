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
        //header: "Playfair Display",
        //header: "Lora",
        //body: "Source Sans Pro",
        //body: "JetBrains Mono",
        //body: "Work Sans",
        //code: "Source Code Pro",
        header: "Playfair Display",
        body: "IBM Plex Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f4f6",                // fondo general más cálido
          lightgray: "#e0e0e0",            // bordes sutiles
          gray: "#8b8b8b",                 // texto secundario
          darkgray: "#4a4a4a",             // títulos/subtítulos
          dark: "#2c2c2c",                 // texto fuerte
          secondary: "#9f7aea",            // enlaces o acentos (lavanda)
          tertiary: "#f38ba8",             // resaltados (rosado pastel)
          highlight: "rgba(159, 122, 234, 0.1)", // fondo de resaltado
          textHighlight: "#f38ba8cc",      // texto resaltado en línea
        },
        darkMode: {
          light: "#1e1e28",                // fondo principal
          lightgray: "#2e2e3a",            // bloques de código / UI
          gray: "#6e6c7e",                 // texto apagado
          darkgray: "#d6d6e7",             // títulos brillantes
          dark: "#f5f5fa",                 // texto fuerte
          secondary: "#cba6f7",            // enlaces o acentos (lavanda clara)
          tertiary: "#f38ba8",             // resaltados
          highlight: "rgba(203, 166, 247, 0.15)", // fondo de resaltado
          textHighlight: "#f38ba8aa",      // texto resaltado en línea
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
