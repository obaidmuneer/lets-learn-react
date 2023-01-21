export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return { ...state, darkTheme: !state.darkTheme }
        case "USER_LOGIN":
            return { ...state, user: action.payload }
        case "USER_LOGOUT":
            return { ...state, user: null }
        case "CHANGE_OWNER":
            return { ...state, owner: action.payload }

        default:
            return state
    }
}