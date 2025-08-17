import { useState } from "react"

const StatesInFbc = () => {

    let [state, setState] = useState("Add To Cart");     // [state = undefine(Add To Cart) , setState = function]

    function btnHandle() {
        console.log("Btn Clicked");
        setState("Go To Cart");
    }
    
    return (
        <div>
            <h1>States in Function Based</h1>
            <button onClick={btnHandle}> {state} </button>
        </div>
    )
}

export default StatesInFbc