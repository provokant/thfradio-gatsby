import React from "react"

import Footer from "./components/footer"
import Header from "./components/header"

import "./styles/index.scss"

export const Layout = ({ applyDarkMode = false, children }) => {
  return (
    <>
      <main className={applyDarkMode ? "--dark" : ""}>
        <Header />
        <article>
          {children}
        </article>
        <Footer />
      </main>
    </>
  )
}

export default Layout
