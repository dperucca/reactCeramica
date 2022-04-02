import {useState} from 'react'

const ItemCounter = () => {

    const [count, setCount] = useState (0)
    const decrement = () => {
        if (count > 0)
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
} 

export default ItemCounter