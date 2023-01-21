import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const GlobalContext = createContext("initialState");

let initValues = {
    theme: "light",
    classId: '',
    todo: []
};

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initValues);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}
