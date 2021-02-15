import React, { useState, useEffect } from 'react';
import './Products.css';
import Loader from '../../components/loader/Loader';
import ProductsList from '../../components/products-list/ProductsList';
import ProductsService from "../../services/productsService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsService.getAllProducts().then(products => {
      setProducts(products);
    });
  }, []);

  return (
    <div className='products-page'>
      {products.length ? <ProductsList products={products} /> : <Loader />}
    </div>
  )
};

export default Products;
