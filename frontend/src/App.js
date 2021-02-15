import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ProductDetails from './pages/product-details/ProductDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Router basename="/">
        <Header></Header>

        <div className='app-page'>
          <div className='page-content'>
            <Switch>
              <Route exact path="/products" component={Products}/>
              <Route exact path="/product-:id" render={({ match }) => <ProductDetails productId={match.params.id} />} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>

      </Router>
    </div>
  );
}

export default App;
