import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Row({ product, onEdit, onDelete }) {
    return (
        <tr>
            <td>{product.type}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.link}</td>
            <td>{product.date && product.date.substring(0, 10)}</td>
            <td><MdDeleteForever onClick={() => onDelete(product._id)} /></td>
            <td><MdEdit onClick={() => onEdit(product)} /></td>
        </tr>
    );
}

export default Row;