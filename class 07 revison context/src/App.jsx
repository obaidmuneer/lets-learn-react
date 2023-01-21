import { useContext, useState } from 'react';
import { GlobalContext } from './context/context';

function App() {
    const { state, dispatch } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [inDex, setInDex] = useState('')

    const handleTodo = () => {
        dispatch({
            type: "addTodo",
            payload: [...state.todo, text]
        })
    }

    const editTodo = (i) => {
        setIsUpdate(!isUpdate)
        setText(state.todo[i])
        setInDex(i)
    }
    const updateTodo = () => {
        const todo = [...state.todo]
        todo[inDex] = text
        setIsUpdate(!isUpdate)
        console.log(todo);
        dispatch({
            type: 'editTodo',
            payload: todo
        })
    }

    return <div>
        <h1>Todo</h1>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        {
            isUpdate ? <button onClick={updateTodo} >Update</button> :
                <button onClick={handleTodo} >Add</button>
        }
        <ul>
            {state?.todo?.map((item, index) =>
                <li key={index} >{item} <button onClick={() => editTodo(index)} >Edit</button></li>)}
        </ul>
    </div>
}

export default App;