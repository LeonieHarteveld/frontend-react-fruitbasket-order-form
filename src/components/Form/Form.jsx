import './Form.css'
import {useState} from "react";


function Form() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        age: "",
        zipCode: "",
        comments: "",
        bezorgfrequentie: "iedere-week",
        deliveryTime: "day-time",
        acceptTerms: false,
    });

    function handleChange(event) {
        const changedFieldName = e.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }


    return (
        <>
            <form>
                <label htmlFor="first-name">Voornaam</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                />

                <label htmlFor="last-name">Achternaam </label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="age">Leeftijd</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}
                />

                <label htmlFor="zip-code">Postcode</label>
                <input
                    type="text"
                    id="zip-code"
                    name="zipCode"
                    value={formState.zipCode}
                    onChange={handleChange}
                />

                <label htmlFor="bezorgfrequentie">Bezorgfrequentie</label>
                <select
                    id="bezorgfrequentie"
                    name="bezorgfrequentie"
                    value={formState.bezorgfrequentie}
                    onChange={handleChange}>
                    <option value="iedere-week">Iedere week</option>
                    <option value="om-de-week">Om de week</option>
                    <option value="iedere-maand">Iedere maand</option>
                </select>


                <label htmlFor="day-time">
                    <input type="radio"
                           id="day-time"
                           name="deliveryTime"
                           value="day-time"
                    checked={formState.deliveryTime ==="day-time"}
                    onChange={handleChange}
                    />
                    Overdag
                </label>

                <label htmlFor="evening">
                    <input type="radio"
                           id="evening"
                           name="deliveryTime"
                           value="evening"
                           checked={formState.deliveryTime ==="evening"}
                           onChange={handleChange}
                    />
                    's Avonds
                </label>

                <label htmlFor="comments">Opmerkingen:</label>
                <textarea
                    id="comments"
                    name="comments"
                    rows="5"
                    cols="33"
                    value={formState.comments}
                    onChange={handleChange}
                />


                <label htmlFor="accept-terms">
                    <input
                        type="checkbox"
                        id="accept-terms"
                        name="acceptTerms"
                        value={formState.acceptTerms}
                        onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button type="button">Verzend</button>

            </form>

        </>
    )
}

export default Form
