import { render } from "@testing-library/react";
import React from "react";

const Cart = ({ toggle, cartItems, addToCart, removeProduct }) => {
  const totalPrice = cartItems.reduce((a,c) => a + c.quantity * c.price, 0);
  if (toggle) {
    return (
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <span className="bolder-text">Total:</span>
          <span className="main-color-text">₺{totalPrice}</span>
        </div>
        {cartItems.length > 0 ? (
          <ul className="shopping-cart-items">
            {cartItems.map((item) => (
              <li className="d-flex justify-content-around" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-description">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₺{item.price}</span>
                </div>
                <div className="item-action">
                  <a className="btn btn-primary btn-count" onClick={() => removeProduct(item)}>-</a>
                  <span className="badge">{item.quantity}</span>
                  <a className="btn btn-primary btn-count"  onClick={()=>addToCart(item)}>+</a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center mt-3">
            <h5 className="text-warning">Sepetinizde ürün bulunmamaktadır!</h5>
          </div>
        )}

        <a href="#" className="button">
          Checkout
        </a>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Cart;
