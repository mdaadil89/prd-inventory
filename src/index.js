import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import {loadProducts} from './redux/products/actions/products.action'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const store = configureStore();
store.dispatch(loadProducts())

ReactDOM.render(
    < Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);


