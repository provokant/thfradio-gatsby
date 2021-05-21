import { Link } from "gatsby"
import React from "react"
import moment from "moment"
import Img from "gatsby-image"
import useLogoImages from "./logo-hook-images"

const LogoImage = () => {
  const { logoDefault } = useLogoImages()
  const { logoDark } = useLogoImages()

  const currentHour = parseFloat(moment().format("HH"))
  const isNight = currentHour > 18 || currentHour < 7

  return (
    <Link to="/">
      <div className="">
        <Img alt="logo" fixed={isNight ? logoDark.childImageSharp.fixed : logoDefault.childImageSharp.fixed}/>
      </div>
    </Link>
  )
}

export default LogoImage
