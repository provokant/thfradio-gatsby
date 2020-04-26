import { useStaticQuery, graphql } from "gatsby"

const useAllTeasers = () => {
  const { allTeasersYaml } = useStaticQuery(graphql`
    query TeaserChatQuery {
      allTeasersYaml {
        teasersList: nodes {
          imageSrc
          imageAlt
          headline
          copytext
          hasBackground
          subheadline
          hasTextRight
        }
      }
    }
  `)

  return allTeasersYaml
}

export default useAllTeasers