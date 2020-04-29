import React, { createRef, useState } from "react"

import loadWidget from "./mixcloud-load-widget"

export class Mixcloud extends React.Component {

  constructor(props) {
    super(props)
    this.iframe = createRef()
    [isLoaded, setLoaded] = useState(false)
  }

  componentDidMount() {
    const { url } = this.props

    // console.log(url)

    loadWidget(this.iframe.current, (widget) => {
      widget.ready.then(() => {
        setLoaded(true)
      })
    })
  }

  render () {
    return(
      <iframe ref={this.iframe} />
    )
  }
}

export default Mixcloud