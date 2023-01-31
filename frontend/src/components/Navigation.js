import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
      <h1>Plasticless</h1>
            
      <h2>Live plastic-free life!</h2>
          
        <h3>
        <Link to="../about-us">Home</Link>
        </h3>
        <h3>
        <Link to="../create-product">Add Product</Link>
        </h3>
        <h3>
        <Link to="../endorsed-products">Endorsed Products</Link>
        </h3>
        <h3>
        <Link to="../frequentlyaskedquestions">Frequently Asked Questions</Link>
        </h3>
        <h3>
        <Link to="../contact-us">Contact</Link>
        </h3>
    </nav>
  );
}

export default Navigation;
