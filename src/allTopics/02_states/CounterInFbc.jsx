import { useState } from "react";

const CounterInFbc = () => {

    const [count, setCount] = useState({ value: 0});

    const increase = () => {
        setCount((prevState) => {
            return { value: prevState.value + 1 };
        });
    };

    const decrease = () => {
        setCount((prevState) => {
            if(prevState.value > 0) {
                return { value: prevState.value - 1 }
            }
            else {
                return { value: 0 }
            }
        });
    };

    const reset = () => {
        setCount(() => {
            return { value: 0 }
        })
    }

    return (
        <div>
            <h1>Counter in Function Based</h1>
            <h2>Counter : {count.value} </h2>
            <button onClick={increase} >Increment</button>
            <button onClick={decrease} >Decrement</button>
            <button onClick={reset} >Reset</button>
        </div>
    );
};

export default CounterInFbc