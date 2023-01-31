import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddProductPage = () => {
    const [type, setType]         = useState('');
    const [name, setName]         = useState('');
    const [description, setDescription]  = useState('');
    const [link, setLink]         = useState('');
    const [date, setDate]         = useState('');
    const history = useHistory();

    const addProduct = async () => {
        const newProduct = { type, name, description, link, date };
        const response = await fetch('/products', {
            method: 'post',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Product succesfully added!");
        } else {
            alert(`Failed to add product, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add product</h2>
            <p>Fill out the form below to add plasticless product:</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Specify your product</legend>
                    <label for="type">Type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={(e) => setType(e.target.value)}
                    >
                    <option value="">--Please select the type of product--</option>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="interior design">Interior Design</option>
                    <option value="electronics">Electronics</option>
                    <option value="other">Other</option>
                    </select>

                    <label for="name">Name of the product</label>
                    <input
                        type="text"
                        placeholder=""
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />

                    <label for="description">Description of the product</label>
                    <input
                        type="text"
                        placeholder=""
                        value={description}
                        onChange={e => setDescription(e.target.value)} 
                        id="description" />

                    <label for="link">Enter link to your product</label>
                    <input
                        type="text"
                        placeholder=""
                        value={link}
                        onChange={e => setLink(e.target.value)} 
                        id="link" />
                
                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="Date of the product submission"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addProduct}
                        id="submit"
                    >Submit</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddProductPage;