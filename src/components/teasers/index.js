import React from "react"

import TeaserChild from "./teasers-child"
import useAllTeasers from "./teasers-hook-use-all"

const Teasers = () => {
  const { teasersList } = useAllTeasers()

  return teasersList.map((props, i) => <TeaserChild {...props} key={i}/>)
}

export default Teasers
