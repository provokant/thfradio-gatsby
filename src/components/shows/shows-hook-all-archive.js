import { useStaticQuery, graphql } from "gatsby"
import { sortBy } from "lodash"
import moment from "moment"

const useAllArchive = () => {
  const { allShow } = useStaticQuery(graphql`
    {
      allShow {
        archive: nodes {
          audio_length
          id
          link: key
          name
          play_count
          date
          pictures {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          tags
          url
        }
      }
    }
  `)

  const { archive } = allShow

  const archiveSorted = sortBy(archive, (show) => { 
    return new moment(show.date)
  }).reverse()

  return { archive, archiveSorted }
}

export default useAllArchive









