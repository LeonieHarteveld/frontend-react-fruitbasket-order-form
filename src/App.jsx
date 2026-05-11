import './App.css'
import FruitItem from "./components/FruitItems/FruitItem.jsx";
import Form from "./components/Form/Form.jsx";
import {useState} from 'react'


function App() {
    const [amount, setAmount] = useState({
        aardbeien: 0,
        bananen: 0,
        appel: 0,
        kiwi: 0,
    });

    const reset = () => {
        setAmount({
            aardbeien: 0,
            bananen: 0,
            appel: 0,
            kiwi: 0,
        });
    };

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitItem
                emoji="🍓"
                fruit="Aardbeien"
                fruitKey="aardbeien"
                amount={amount.aardbeien}
                setAmount={setAmount}
            />

            <FruitItem
                emoji="🍌"
                fruit="Bananen"
                fruitKey="bananen"
                amount={amount.bananen}
                setAmount={setAmount}
            />

            <FruitItem
                emoji="🍏"
                fruit="Appel"
                fruitKey="appel"
                amount={amount.appel}
                setAmount={setAmount}
            />

            <FruitItem
                emoji="🥝"
                fruit="Kiwi"
                fruitKey="kiwi"
                amount={amount.kiwi}
                setAmount={setAmount}
            />

            <button onClick={reset}>Reset</button>

            <Form />
        </>
    );
}

export default App
