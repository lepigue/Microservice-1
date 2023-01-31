// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ContactPage from './pages/ContactPage';
import FrequentlyAskedQuestionsPage from './pages/FrequentlyAskedQuestionsPage';
import EndorsedProductPage from './pages/EndorsedProductPage';
import EditEndorsedProductsPage from './pages/EditEndorsedProductsPage';

// Define the function that renders the content in routes using State.
function App() {

  const [product, setProduct] = useState([]);

  return (
    <>
      <Router>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage/>
            </Route>

            <Route path="/create-product">
              <AddProductPage />
            </Route>

            <Route path="/about-us">
              <HomePage />
            </Route>
            

            <Route path="/contact-us">
              <ContactPage />
            </Route>

            <Route path="/frequentlyaskedquestions">
              <FrequentlyAskedQuestionsPage />
            </Route>

            <Route path="/endorsed-products">
              <EndorsedProductPage setProduct={setProduct} />
            </Route>
            <Route path="/edit-endorsed-products">
              <EditEndorsedProductsPage  product={product} />
            </Route>
            
          </main>

          <footer>
            <p> <cite>&copy; 2023 Plasticless </cite></p>
          </footer>

      </Router>
    </>
  );
}

export default App;