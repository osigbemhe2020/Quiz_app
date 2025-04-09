import React from "react";

export default function Counter(){
    const [count, setCount] = React.useState(0)
    
    function add() {
      setCount(prevCount => prevCount + 1)
    }
    function sub(){
        setCount(prevCount => prevCount - 1)
    }

    return(
        <div>
            <button onClick={add}>Add</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={sub}>Subtract</button>
        </div>
    )
}
