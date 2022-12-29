import { useState } from 'react';
import './index.css'
const Lit = () => {
    const [isLit, setIsLit] = useState(false)
    return <div
        // style={
        //     {
        //         color: 'red',
        //         backgroundColor: isLit ? 'black' : null,
        //     }
        // }
        className={isLit ? 'dark' : null} >
        <p>Change Background</p>
        <button onClick={() => setIsLit(!isLit)} >Turn {isLit ? 'off' : 'on'} dark mode</button>
    </div>
}
export default Lit;