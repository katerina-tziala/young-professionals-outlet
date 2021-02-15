import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import ProductsService from "../../services/productsService";
import Loader from '../../components/loader/Loader';

function ProductDetails({ productId }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        ProductsService.getProductById(productId).then(products => {
            setProduct(products);
        });
    }, []);

    return (
        <div className="product-details-page">
            {product
                ? <div className="product-details">
                    <p className="product-category">{product.category}</p>
                    <h2 className="product-title">{product.title}</h2>
                    <div className='product-details-image' style={{
                        backgroundImage: `url(${(product.image)})`
                    }}></div>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price-cart">
                        <p className="product-price">&euro; {product.price}</p>
                        <button>in cart</button>
                    </div>
                </div>
                : <Loader />}
                
        </div>
    )
};

export default ProductDetails;