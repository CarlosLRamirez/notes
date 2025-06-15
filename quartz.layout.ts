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
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
  Component.RecentNotes({ showTags: false, limit: 5, }),
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
    //Component.Explorer(),
    Component.DesktopOnly(Component.RecentNotes({ showTags: false, limit: 10, })),

  ],
  right: [
    
    
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),

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
