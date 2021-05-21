import React, { createRef } from "react"

import loadWidget from "./mixcloud-load-widget"

export class Mixcloud extends React.Component {

  constructor(props) {
    super(props)
    this.iframe = createRef()
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    const { url } = this.props

    // console.log(url)

    loadWidget(this.iframe.current, (widget) => {
      widget.ready.then(() => {
        // this.setState({ isLoaded: true })
        console.log("testing")
      })
      // console.log(widget)
    })
  }

  render() {
    return (
      <iframe ref={this.iframe}/>
    )
  }
}

export default Mixcloud
