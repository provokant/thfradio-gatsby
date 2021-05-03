import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import moment from "moment"
import Img from "gatsby-image"
import useLogoImages from "./logo-hook-images"

const LogoDark = () => {

const { logoDark } = useLogoImages()

  return (
        <Link to="/">
        <div className="">
          <Img alt="logo" fixed={logoDark.childImageSharp.fixed} />
       </div>
        </Link>
  )
}

export default LogoDark