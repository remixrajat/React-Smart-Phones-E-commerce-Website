import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1 className="prod">Cart</h1>
      <br />
      {cart.length > 0 && (
        <button className="remove" onClick={clearCart}><b>Clear Cart</b></button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div key={idx}>
            <h3 className="pr">{product.name}</h3>
            <h4 className="pr">Rs.{product.cost}</h4>
            <input className="input"
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <br />
            <img src={product.image} alt={product.name} />
            <br />
            <button className="removecart" onClick={() => removeFromCart(product)}>
              <b>Remove</b>
            </button>
          </div>
        ))}
      </div>

      <div className="tot"><b>Total Cost: Rs.{getTotalSum()}</b></div>
    </>
  );
}