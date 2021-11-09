import { graphql, useStaticQuery } from "gatsby"

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
                ...GatsbyImageSharpFluid_withWebp_noBase64
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
  archive.map(x=>x.date=new Date(x.date))

  const archiveSorted = archive.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return { archive, archiveSorted }
}

export default useAllArchive










