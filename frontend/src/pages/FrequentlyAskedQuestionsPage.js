import React from 'react';
import { Link } from 'react-router-dom';

function FrequentlyAskedQestions() {
    return (
        <div>
            <p>Q: Can my product have any plastic in it? </p>
            <p>A: No. Your product needs to have zero plastic to qualify for the Plasticless endorsed product list.<p/>
            <p>Q: What do I do if I entered incorrect information?</p>
            <p>A: Click on Edit Product and edit your recently entered product.</p>
            <p>Q: What if my category of product is not available?</p>
            <p>A: Click on "Other" in the drop down menu.</p>
            <p>Q: Do you register only U.S. products or can the products be located world-wide? </p>
            <p>A: The products can be located world - wide.</p>
            <p>Cannot find what were you looking for?</p>
            <p><Link to="../contact-us">Contact us!</Link></p>
            </p>
        </div>
    );
}

export default FrequentlyAskedQestions;
