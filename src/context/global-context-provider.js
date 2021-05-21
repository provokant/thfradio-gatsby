import React from "react"

export const GlobalStateContext = React.createContext(undefined)
export const GlobalDispatchContext = React.createContext(undefined)

const initialState = {
  theme: "light",
  isLiveRadioPlaying: false,
  archivePlays: null,
  isArchivPlaying: true
}

function reducer(state, action) {
  // console.log(state, action)
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
    }
    case "PAUSE_LIVE_RADIO": {
      return {
        ...state,
        isLiveRadioPlaying: false
      }
    }
    case "PlAY_LIVE_RADIO": {
      return {
        ...state,
        isLiveRadioPlaying: true,
        archivePlays: null
      }
    }
    case "TOGGLE_ARCHIVE_PLAYER": {
      const archivePlays = action.payload === state.archivePlays
        ? null
        : action.payload

      const isLiveRadioPlaying = !state.archivePlays
        ? false
        : state.isLiveRadioPlaying

      return {
        ...state,
        archivePlays,
        isLiveRadioPlaying
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
