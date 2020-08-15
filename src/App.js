import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <button className="upperbutton" onClick={() => navigateTo(PAGE_CART)}>
          <b>Go to Cart ({getCartTotal()})</b>
        </button>

        <button className="upperbutton" onClick={() => navigateTo(PAGE_PRODUCTS)}>
          <b>View Products</b>
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
      <Footer />
    </div>
  );
}

export default App;