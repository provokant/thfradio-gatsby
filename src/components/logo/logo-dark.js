import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import useLogoImages from "./logo-hook-images"

const LogoDark = () => {

  const { logoDark } = useLogoImages()

  return (
    <Link to="/">
      <div className="">
        <Img alt="logo" fixed={logoDark.childImageSharp.fixed}/>
      </div>
    </Link>
  )
}

export default LogoDark
