import React from 'react';
import {  Switch,Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import AboutPage from './pages/about/aboutpage.component'
import ProductsPage from './pages/products/productsPage.component'
import RegistrationPage from './pages/registration/RegistrationPage.component'
import ProductAddEdit from './components/products/productAddEdit.component'
import Login from './pages/login/LoginPage.component'


class App extends React.Component {
  
  render() {
    return(
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={AboutPage} />
        <Route exact path='/products' component={ProductsPage} />
        <Route exact path='/products/:id' component={AboutPage} />
        <Route  path='/signin' component={Login} />
        <Route  path='/signout' component={AboutPage} />
        <Route  path='/chart' component={AboutPage} />
        <Route  path='/register' component={RegistrationPage} />
        <Route exact path='/products/add' ><ProductAddEdit type={"Add"} /></Route>
        <Route  path='/products/edit/:id' ><ProductAddEdit type= {"Edit"}/></Route>
        </Switch>
      </div>
    )
  }
   
  
}

export default App;
