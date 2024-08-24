import React from "react";
import { useState }  from "react";

const App = () => {
    // ARRAY DESTRUCTURING
    const [num , setNum] = useState(0);


const addCounter = () =>{
    setNum(num + 1);
}


const lessCounter = () =>{
    setNum(num - 1);
}

return (
    <>


    <div className="counter-container">
    <h1>REACT COUNTER</h1>
    <h1 className="count">{num}</h1>
    <div className="buttons">
    <button onClick={addCounter}>Add {num}</button>
    <button onClick={lessCounter}>Less {num}</button>
    </div>
    </div>


    </>
)
}


export default App





