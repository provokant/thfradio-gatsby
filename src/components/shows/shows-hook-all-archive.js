import { useStaticQuery, graphql } from "gatsby"

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

  const archiveSorted = archive.sort((a, b) => { 
    return new Date(b.date) - new Date(a.date)
  })

  return { archive, archiveSorted }
}

export default useAllArchive










