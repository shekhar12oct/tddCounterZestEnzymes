import {React,useState} from 'react';

const Counter = () => {
    const [counter,setCounter]=useState(0);

    const handleClick=()=>{  
        setCounter(counter+1);
    }
    return (
        <div>
            <p id="#value2">{counter}</p>
           <button id="btn-click" onClick={handleClick}>Click Me</button> 
        </div>
    )
}

export default Counter;
