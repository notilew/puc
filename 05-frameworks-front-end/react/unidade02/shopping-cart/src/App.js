import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Products } from './views/Products';
import { ProductDetailsRedux } from './views/ProductDetails';
import { CartRedux } from './views/Cart';
import { Provider } from 'react-redux';
import { Store } from './store/index';
import './App.css';

function App() {
    return (
        <Provider store={Store}>
            <div id="main-app">
                <h1>Amazing Store</h1>
                <BrowserRouter>
                    <Route path="/" component={Products} exact></Route>
                    <Route path="/product/:id" component={ProductDetailsRedux}></Route>
                    <Route path="/cart" component={CartRedux}></Route>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
