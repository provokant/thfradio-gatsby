import React, { useState } from "react"
// import SoundCloud from "react-soundcloud-widget"

import Container from "../container"
import Headline from "../headline"
import Mixcloud from "../mixcloud"

import "./archive.scss"
import useAllArchive from "./archive-hook-all"
import ArchiveChild from "./archive-child"
import Paragraph from "../paragraph"
import Section from "../section"

const Archive = () => {
  const { archiveSorted } = useAllArchive()
  const [widgetUrl, setWidgetUrl] = useState(null)

  const handleWidget = (newUrl) => {
    setWidgetUrl(url => url = newUrl)
    // console.log(newUrl)
  }

  const ArchiveChildren = () => archiveSorted.map(show => 
    <ArchiveChild {...show} onClick={() => handleWidget(show.url)} />
  )
  
  const ArchiveContainer = ({ children }) => (
    <div className="archive__inner">{children}</div>
  )

  return (
    <Section title="archive">
      <Container>
        <Headline title="Archiv"/>
        <Paragraph text="Alle vergangen Sendungen zum Nachhören" />
        <ArchiveContainer>
          <ArchiveChildren />
          
          <Mixcloud url={widgetUrl} />
        </ArchiveContainer>
      </Container>
    </Section>
  )
}

export default Archive
