import React from 'react';
import './ProductListItem.css';

function ProductListItem({ product }) {
    return (
        <>
            <div className='product-list-item-image' style={{
                backgroundImage: `url(${(product.image)})`
            }}></div>
            <p className="product-category">{product.category}</p>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">&euro; {product.price}</p>
        </>
    )
};

export default ProductListItem;
