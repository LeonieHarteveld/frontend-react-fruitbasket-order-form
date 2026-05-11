import './FruitItem.css'
// import {useState} from 'react'

function FruitItem({amount, setAmount, fruitKey, emoji, fruit}) {

    const incrementAmount = () => {
        setAmount((prevAmount) => ({
            ...prevAmount,
            [fruitKey]: prevAmount[fruitKey] + 1,
        }));
    };

    const decrementAmount = () => {
        setAmount((prevAmount) => ({
            ...prevAmount,
            [fruitKey]: prevAmount[fruitKey] > 0 ? prevAmount[fruitKey] - 1 : 0,
        }));
    };

    return (
        <>
            <div className="FruitItem">
                <p>{emoji} {fruit}
                    <button onClick={incrementAmount}>+</button>
                    {amount}
                    <button onClick={decrementAmount}>-</button>
                </p>
            </div>
        </>
    )
}

export default FruitItem