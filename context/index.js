import { View, Text } from 'react-native'
import React, { createContext, useReducer } from 'react'
import auth from './reducers'
import authState from './state'

const GlobalContext = createContext({})

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(auth, authState)

    const contextValue = React.useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <GlobalContext.Provider value={contextValue} >
        {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider