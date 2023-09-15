import { useState } from "react";
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p className='counter'>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}