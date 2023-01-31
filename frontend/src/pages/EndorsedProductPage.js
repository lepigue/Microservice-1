import React from 'react';
import Table from '../components/Table';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


function EndorsedProductPage({ setProduct }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [products, setProducts] = useState([]);

    // RETRIEVE the list of products
    const loadProducts = async () => {
        const response = await fetch('/products');
        const products = await response.json();
        setProducts(products);
    } 
    

    // UPDATE a product
    const onEditProduct = async product => {
        setProduct(product);
        history.push("/edit-endorsed-products");
    }


    // DELETE a product  
    const onDeleteProduct = async _id => {
        const response = await fetch(`/products/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/products');
            const products = await getResponse.json();
            setProducts(products);
        } else {
            console.error(`Failed to delete products with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the products
    useEffect(() => {
        loadProducts();
    }, []);

    // DISPLAY the products
    return (
        <>
            <article>
                
                <Table 
                    products={products} 
                    onEdit={onEditProduct} 
                    onDelete={onDeleteProduct} 
                />
            </article>
        </>
    );
}

export default EndorsedProductPage;