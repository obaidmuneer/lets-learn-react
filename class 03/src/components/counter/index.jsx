import { useEffect, useState } from "react";

function Counter({ heading, name }) {
    const [counter, setCounter] = useState(0);
    // console.log(state[1]);
    // state can be
    //string //number // array //obj //boolean

    // console.log(props);
    // console.log(heading, name);

    // const addNum = () => setCounter(counter + 1);

    // const minusNum = () => setCounter(counter - 1);



    return <div>
        <h6>{`${heading} created by ${name}`}</h6>
        {counter}
        <br />
        <button onClick={() => setCounter(counter + 1)} >Add</button>
        <button onClick={() => setCounter(counter - 1)} >Minus</button>
    </div>
}

export default Counter;