import React from "react"
import moment from "moment"

import SEO from "./../components/seo"
import Archive from "../components/archive"
import FirstImpression from "../components/first-impression"
import LastImpression from "../components/last-impression"
import Layout from "../layout"
import Timetable from "../components/timetable"

const IndexTemplate = () => {
  const currentHour = parseFloat(moment().format("HH"))
  const isNight = currentHour > 18 || currentHour < 7

  return (
    <Layout applyDarkMode={isNight}>
      <SEO title="Startseite" />
      <FirstImpression hasDarkBackground={isNight} />
      <Timetable />
      <Archive />
      <LastImpression />
    </Layout>
  )
}

export default IndexTemplate
