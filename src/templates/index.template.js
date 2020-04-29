import React from "react"
import moment from "moment"

import SEO from "./../components/seo"
import Shows from "../components/shows"
import FirstImpression from "../components/first-impression"
import LastImpression from "../components/last-impression"
import Layout from "../layout"
import Timetable from "../components/timetable"

const IndexTemplate = () => {
  const currentHour = parseFloat(moment().format("HH"))
  // const isNight = currentHour > 18 || currentHour < 7
  const isNight = false

  return (
    <Layout applyDarkMode={isNight}>
      <SEO title="Startseite" />
      <FirstImpression hasDarkBackground={isNight} />
      <Timetable />
      <Shows />
      <LastImpression />
    </Layout>
  )
}

export default IndexTemplate
