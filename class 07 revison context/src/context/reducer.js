export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "addTodo": {
            return { ...state, todo: action.payload }
        }
        case "editTodo": {
            return {...state, todo: action.payload }
        }
        default:
            return state;
    }
};
