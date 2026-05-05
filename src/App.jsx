import './App.css'
import FruitItem from "./components/FruitItems/FruitItem.jsx";
import Form from "./components/Form/Form.jsx";


function App() {

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitItem emoji="🍓"
                       fruit="Aardbeien"
            />
            <FruitItem emoji="🍌"
                       fruit="Bananen"
            />
            <FruitItem emoji="🍏"
                       fruit="Appel"
            />

            <FruitItem emoji="🥝"
                       fruit="Kiwi's"
            />

            <Form/>



        </>
    )
}

export default App
