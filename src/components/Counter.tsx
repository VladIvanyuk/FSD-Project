import { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p className={styles.counter}>{count}</p>
            <p className={styles.counter2}>{count + 1}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}