import React from 'react';
import {  Switch,Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import AboutPage from './pages/about/aboutpage.component'
import ProductsPage from './pages/products/productsPage.component'
import FormikProductForm from './components/products/productform.component'
import ProductAddEdit from './components/products/productAddEdit.component'


class App extends React.Component {
  
  render() {
    return(
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={AboutPage} />
        <Route  path='/products' component={ProductsPage} />
        <Route  path='/signin' component={ProductAddEdit} />
        <Route  path='/signout' component={AboutPage} />
        <Route  path='/chart' component={AboutPage} />
        </Switch>
      </div>
    )
  }
   
  
}

export default App;
