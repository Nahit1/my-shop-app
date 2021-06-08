import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineShopping } from 'react-icons/ai/index';

const Product = ({product, addToCart}) => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
        <div className="col-md-6 col-lg-6 col-xl-3 mt-1">
        <div className="card">
            <img src={product.image} alt={product.name} className="card-img-top img-fluid" />
            <div className="card-body">
            <h4 className="card-title mt-0">{product.name}</h4>
            <p className="card-text text-danger font-weigh-bold">₺{product.price}</p>
            <a
                href="#"
                className="btn btn-primary btn-sm waves-effect waves-light"
                onClick={()=>addToCart(product)}
            >
                <AiOutlineShopping/>
                Sepete Ekle
            </a>
            </div>
        </div>
        </div>
    </IconContext.Provider>
  );
};

export default Product;
