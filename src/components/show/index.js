import React, { useContext } from "react"

import { GlobalStateContext } from "../../context/global-context-provider"
import Container from "../container"
import Headline from "../headline"
import ReactPlayer from "react-player"

import "./archive.scss"
import useAllArchive from "./archive-hook-all"
import ArchiveChild from "./archive-child"
import Section from "../section"

const Archive = ({ isDarkMode = false }) => {
  const { archiveSorted } = useAllArchive()
  const { archivePlays } = useContext(GlobalStateContext)

  const ArchiveChildren = () => archiveSorted.map(show =>
    <ArchiveChild {...show} />
  )

  const ArchiveContainer = ({ children }) => (
    <div className="archive__inner">{children}</div>
  )

  return (
    <Section title="archive" className="bg-thfDarkBlue">
      {
        archivePlays && <ReactPlayer
          url={archivePlays}
          className="archive__player"
          playing
          width="100%"
          height="60px"
          config={{
            mixcloud: {
              options: {
                light: !isDarkMode,
                mini: true
              }
            }
          }}/>
      }
      <Container>
        <Headline title="Archiv"/>
        <ArchiveContainer>
          <ArchiveChildren/>
        </ArchiveContainer>
      </Container>
    </Section>
  )
}

export default Archive
