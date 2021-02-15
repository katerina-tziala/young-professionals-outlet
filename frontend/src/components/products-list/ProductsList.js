import React from 'react';
import './ProductsList.css';
import { NavLink } from 'react-router-dom';
import ProductListItem from './product-list-item/ProductListItem';

function ProductsList({ products }) {
    return (
        <>
            <ul className='products-list'>
                {products.map(product =>
                    <li key={product.id} className='product-list-item'>
                        <NavLink className='product-list-item-content' to={`/product-${product.id}`}>
                            <ProductListItem product={product}></ProductListItem>
                        </NavLink>
                    </li>
                )}
            </ul>
        </>
    )
};

export default ProductsList;
