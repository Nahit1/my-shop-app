import React from 'react'
import { IconContext } from "react-icons";
import { AiOutlineShopping } from 'react-icons/ai/index';
import Cart from './Cart';


const Navbar = ({toggle, shopCartHandle, cartItems, addToCart, removeProduct}) => {
    return (
        <IconContext.Provider value={{ size: "2em", className: "nav-shop-icon" }}>
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
            <div className="container">
                <a className="navbar-brand">
                    Shopping App
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                    </ul>
                    <a className="nav-link" onClick={shopCartHandle}>
                        <AiOutlineShopping/>
                        <span className="cart-amount">{cartItems.length}</span>
                    </a>
                </div>
            </div>
        </nav>
        <Cart toggle={toggle} cartItems={cartItems} addToCart={addToCart} removeProduct={removeProduct}/>
        </IconContext.Provider>
        
    )
}

export default Navbar
