import './Form.css'


function Form() {

    return (
        <>
            <form>
                <label htmlFor="first-name">Voornaam</label>
                <input type="text" id="first-name" name="first_name"/>
                <label htmlFor="last-name">Achternaam</label>
                <input type="text" id="last-name" name="last_name"/>
                <label htmlFor="age">Leeftijd</label>
                <input type="number" id="age" name="age"/>
                <label htmlFor="zip-code">Postcode</label>
                <input type="text" id="zip-code" name="zip_code"/>
                <label htmlFor="bezorgfrequentie">Bezorgfrequentie</label>
                <select id="bezorgfrequentie" name="bezorgfrequentie">
                    <option value="iedere-week">Iedere week</option>
                    <option value="om-de-week">Om de week</option>
                    <option value="iedere-maand">Iedere maand</option>
                </select>
                <input type="radio" id="day-time" name="delivery-time" value="day-time" defaultChecked/>
                <label htmlFor="day-time">Overdag</label>
                <input type="radio" id="evening" name="delivery-time" value="evening"/>
                <label htmlFor="evening">'s Avonds</label>
                <label htmlFor="comments">Opmerkingen:</label>

                <textarea id="comments" name="comments" rows="5" cols="33">
</textarea>
                <input type="checkbox" id="accept" name="accept" checked/>
                <label htmlFor="accept">Ik ga akkoord met de voorwaarden</label>
                <button type="button">Verzend</button>


            </form>

        </>
    )
}

export default Form
