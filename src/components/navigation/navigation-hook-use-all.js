import { useStaticQuery, graphql } from "gatsby"

const useAllNavLinks = () => {
  const { allNavigationYaml } = useStaticQuery(graphql`
    query NavigationQuery {
      allNavigationYaml {
        navList: nodes {
          url
          title
        }
      }
    }
  `)

  return allNavigationYaml
}

export default useAllNavLinks