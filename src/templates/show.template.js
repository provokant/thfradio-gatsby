import React from "react"
//import moment from "moment"
import dayjs from "dayjs"

import SEO from "../components/seo"
import Archive from "../components/archive"
import FirstImpression from "../components/first-impression"
import Layout from "../layout"
import Timetable from "../components/timetable"

const ShowTemplate = () => {
  const currentHour = parseFloat(dayjs().format("HH"))
  const isNight = currentHour > 18 || currentHour < 7

  return (
    <Layout applyDarkMode={isNight}>
      <SEO title="Show"/>
      <FirstImpression hasDarkBackground={isNight}/>
      <Archive isDarkMode={isNight}/>
    </Layout>
  )
}

export default ShowTemplate
