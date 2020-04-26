import React, { useEffect, useState, useCallback } from "react"
import { useTransition, animated } from "react-spring"

import "./text-scroller.scss"

// Duration between text scroll events
const DURATION = 2000

const TextScroller = ({ text = [] }) => {
  const [index, set] = useState(0)

  const textElements = text.map(t => {
    return ({ style }) => (
      <animated.div style={{...style}} className="text-scroller__text">
        {t}
      </animated.div>
    )
  })

  // Animation states
  const transitions = useTransition(index, p => p, {
    from: { 
      opacity: 0,
      transform: "translate3d(0,-50%,0) skew(-2deg, 1deg) scale(1.4)" 
    },
    enter: { 
      opacity: 1,
      transform: "translate3d(0,0%,0) skew(0, 0d) scale(1)" 
    },
    leave: { 
      opacity: 0,
      transform: `translate3d(0,10%,0) skew(-1deg, 2deg) scale(0.8)`
    },
    config: {
      mass: 0.8,
      tension: 201,
      friction: 16,
      velocity: 1
    }
  })

  // Rotate through list of texts
  const changeState = useCallback(() => {
    set(state => (state + 1) % text.length)
  }, [text])

  // Enable interval for rotating text blocks
  useEffect(() => {
    const interval = setInterval(changeState, DURATION)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    // eslint-disable-next-line
    <button className="text-scroller" onClick={changeState} role="presentation">
      {transitions.map(({ item, props, key }) => {
        const Text = textElements[item]

        return <Text key={key} style={props} />
      })}
    </button>
  )
}

export default TextScroller
