import { useState } from "react"

function Counter() {
    
    let [count, setCount] = useState(0)

    const increaseValue = () => {
        setCount(count+1)
    }
    
    const decreaseValue = () => {
        setCount(count-1)
    }

    return(
        <>
        <h1>Counter value : {count} </h1>
        <button onClick={increaseValue}>Increase Value</button>
        <br /> <br />
        <button onClick={decreaseValue}>Decrease Value</button>
        </>
    )
}

export default Counter;