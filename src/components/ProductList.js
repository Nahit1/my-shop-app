import React from 'react'
import Product from './Product';

const ProductList = ({products, addToCart}) => {
    return (
        <div className="product-section mt-3">
            <div className="container">
                <div className="row">
                    {products.map((item) => (
                        <Product product={item} addToCart={addToCart} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList
