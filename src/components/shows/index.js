import React from "react"

import Container from "../container"
import Headline from "../headline"

import "./shows.scss"
import useAllArchive from "./shows-hook-all-archive"
import ArchiveChild from "./shows-child"
import Paragraph from "../paragraph"
import Section from "../section"

const Shows = () => {
  const { archiveSorted } = useAllArchive()

  const ArchiveChildren = () => archiveSorted.map(show => 
    <ArchiveChild {...show} />
  )
  
  const ArchiveContainer = ({ children }) => (
    <div className="shows__inner">{children}</div>
  )

  return (
    <Section title="shows">
      <Container>
        <Headline title="Archiv"/>
        <Paragraph text="Alle vergangen Sendungen zum Nachhören" />
        <ArchiveContainer>
          <ArchiveChildren />
        </ArchiveContainer>
      </Container>
    </Section>
  )
}

export default Shows
