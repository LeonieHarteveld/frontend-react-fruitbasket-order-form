import './FruitItem.css'
import {useState} from 'react'

function FruitItem({emoji, fruit}) {

    const [amount, setAmount] = useState(0);
    const incrementAmount = () => {
        setAmount(amount + 1);
    };
    const decrementAmount = () => {
        setAmount(amount > 0 ? amount - 1 : amount);
    }

    const reset = () => {
        setAmount(0);
    }

    return (
        <>
            <div className="FruitItem">
                <p>{emoji} {fruit}
                    <button onClick={incrementAmount}>+</button>
                    {amount}
                    <button onClick={decrementAmount}>-</button>
                </p>
            </div>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default FruitItem