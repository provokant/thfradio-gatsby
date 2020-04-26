import React from "react"

const Section = ({ title, className, children }) => {
  const containerClassName = [
    title,
    className
  ].join(" ")

  return (
    <section className={containerClassName} id={title}>
      {children}
    </section>
  )
}

export default Section