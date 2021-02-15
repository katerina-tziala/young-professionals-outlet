import React, { useState, useEffect } from 'react';
import './Home.css';
import Loader from '../../components/loader/Loader';
import ProductsList from '../../components/products-list/ProductsList';
import ProductsService from "../../services/productsService";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      ProductsService.getAllProducts().then(products => {
        setProducts(products);
      });
    }, []);
  
    return (
        <div className='home-page'>
            <div className='home-hero-image'></div>
            {products.length ? <ProductsList products={products} /> : <Loader/>}
        </div>
    )
};

export default Home;
