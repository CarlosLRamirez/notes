import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/carloslrm/",
      Github: "https://github.com/CarlosLRamirez",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),

    Component.ArticleTitle(),



    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),

    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],

  afterBody: [


    Component.ConditionalRender({
      component: Component.Comments({
        provider: "giscus",
        options: {
          repo: "CarlosLRamirez/notes",
          repoId: "R_kgDOOXCNEw",
          category: "Comments",
          categoryId: "DIC_kwDOOXCNE84Cqt0z",
          mapping: "pathname",
          strict: true,
          reactionsEnabled: true,
          inputPosition: "bottom",
          lightTheme: "light",
          darkTheme: "dark",
        },
      }),
      condition: (page) => page.fileData.frontmatter?.comments === true,
    }),
    Component.ConditionalRender({
      component: Component.Graph({
        globalGraph: {
          showTags: false, // whether to show tags in the graph
        },
        localGraph: {
          showTags: false, // whether to show tags in the graph
          depth: 4, // how many hops of notes to display
        },
      }),
      condition: (page) => page.fileData.slug === "index",
    }),


  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
    //Component.DesktopOnly(Component.RecentNotes({ showTags: false, limit: 10, })),
  ],
  right: [

    Component.ConditionalRender({
      component:
        Component.Graph({
          localGraph: {
            showTags: false, // whether to show tags in the graph
          },
          globalGraph: {
            showTags: false, // whether to show tags in the graph
          },
        }),
      condition: (page) => page.fileData.slug !== "index",
    }),

    Component.ConditionalRender({
      component: Component.RecentNotes({ showTags: false, limit: 8 }),
      condition: (page) => page.fileData.slug === "index",
    }),


    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
