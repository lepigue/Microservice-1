import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditEndorsedProductsPage = ({ product }) => {
 
    const [type, setType]       = useState(product.type);
    const [name, setName]       = useState(product.name);
    const [description, setDescription]   = useState(product.description);
    const [link, setLink]       = useState(product.link);
    const [date, setDate]       = useState(product.date);
    
    const history = useHistory();

    const editProduct = async () => {
        const response = await fetch(`/products/${product._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                type:type,
                name: name, 
                description: description, 
                link: link,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit your product:</h2>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                <legend>Specify your product</legend>
                    <label for="type">Type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={(e) => setType(e.target.value)}
                    >
                    <option value="">{type}</option>
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
                        onClick={editProduct}
                        id="submit"
                    >Submit</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditEndorsedProductsPage;