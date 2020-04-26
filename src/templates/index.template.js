import React from "react"
import moment from "moment"

import SEO from "./../components/seo"
// import AccordionTags from "./../organisms/accordion-usecases/accordion-usecases.organism"
import Shows from "../components/shows"
import FirstImpression from "../components/first-impression"
import LastImpression from "../components/last-impression"
import Layout from "../layout"
import Teasers from "../components/teasers"
import Timetable from "../components/timetable"

const IndexTemplate = () => {
  const currentHour = parseFloat(moment(new Date()).format("HH"))
  const isNight = currentHour > 18 || currentHour < 7
  // const isNight = true

  return (
    <Layout applyDarkMode={isNight}>
      <SEO title="Startseite" />
      <FirstImpression hasDarkBackground={isNight} />
      <Timetable />
      <Teasers />
      {/* <AccordionTags /> */}
      <Shows />
      <LastImpression />
    </Layout>
  )
}

export default IndexTemplate
