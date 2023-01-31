import React from 'react';
import Product from './Row';

function Table({ products, onDelete, onEdit }) {
    return (
        <table id="products">
            <caption> Endorsed Products:</caption>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => 
                    <Product 
                        product={product} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default Table;
