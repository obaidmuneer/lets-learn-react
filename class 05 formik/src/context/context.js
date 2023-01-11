import { createContext, useReducer } from 'react'
import { reducer } from './reducer'
export const GlobalContext = createContext("initialState")

let data = {
    darkTheme: false,
    user: null,
    todo: [],
    loading: false,
    owner: ''
}

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data)

    return <GlobalContext.Provider value={{ state, dispatch }} >
        {children}
    </GlobalContext.Provider>
}
