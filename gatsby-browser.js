import React from "react"
import GlobalContextProvider from "./src/context/global-context-provider.js"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}