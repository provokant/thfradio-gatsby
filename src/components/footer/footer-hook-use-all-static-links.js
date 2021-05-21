import { graphql, useStaticQuery } from "gatsby"

export const useAllStaticLinks = () => {
  const { allSitePage } = useStaticQuery(graphql`
    query StaticPagesQuery {
      allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: false}}) {
        allLinks: nodes {
          path
          context {
            title
            lang
          }
        }
      }
    }
  `)

  const { allLinks } = allSitePage

  const allLinksByLang = (lang) =>
    allLinks.filter(({ context }) => context.lang === lang)

  return {
    allLinks,
    allLinksByLang
  }
}

export default useAllStaticLinks
