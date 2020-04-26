import React from "react"

const Container = ({ className = "", children }) => {
  const containerClassName = [
    "container",
    className
  ].join(" ")

  return (
    <div className={containerClassName}>
      {children}
    </div>
  )
}

export default Container