import React from 'react'
import { GlobalContext } from '../../context/context'


const SignUp = () => {
    const [name, setName] = React.useState('')
    const { state, dispatch } = React.useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e);
        // console.log(name);
        dispatch({
            type: "CHANGE_OWNER",
            payload: name
        })
    }
    return (
        <div>
            <h3>SignUp Form</h3>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <button type="submit">Submit</button>
            </form>
            {state?.owner}
        </div>
    )
}

export default SignUp