import React from "react"
//import moment from "moment"
import dayjs from "dayjs"

import SEO from "./../components/seo"
import Archive from "../components/archive"
import FirstImpression from "../components/first-impression"
import Layout from "../layout"
import Timetable from "../components/timetable"

const IndexTemplate = () => {
  const currentHour = parseFloat(dayjs().format("HH"))
  const isNight = currentHour > 18 || currentHour < 7

  return (
    <Layout applyDarkMode={isNight}>
      <SEO title="Startseite"/>
      <FirstImpression hasDarkBackground={isNight}/>
      <Timetable/>
      <Archive isDarkMode={isNight}/>
    </Layout>
  )
}

export default IndexTemplate
