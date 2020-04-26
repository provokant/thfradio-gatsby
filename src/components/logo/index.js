import React from "react"
import { Link } from "gatsby"

import "./logo.scss"

const Logo = ({ isInverted = false, className = "text-xl" }) => {
  const logoClassName = [
    "logo",
    className,
    isInverted ? "--inverted" : ""
  ].join(" ")

  return (
    <Link to="/" className={logoClassName}>
      <span className="logo__start">THF</span>·<span className="logo__end">Radio</span>
    </Link>
  )

}

export default Logo
