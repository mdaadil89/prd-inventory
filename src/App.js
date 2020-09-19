import React from 'react';
import {  Switch,Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import AboutPage from './pages/about/aboutpage.component'
import ProductsPage from './pages/products/productsPage.component'
import ViewPage from './pages/products/productViewPage.component'
import RegistrationPage from './pages/registration/RegistrationPage.component'
import ChartsComponent from './components/charts/charts.component'
import ProductAddEdit from './components/products/productAddEdit.component'
import Login from './pages/login/LoginPage.component'
import * as userActions  from './redux/users/actions/users.action' ;
import { connect } from 'react-redux';


class App extends React.Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        <Header logon={this.props.loggedIn} />
        <Switch>
        <Route exact path='/' component={AboutPage} />
        <Route exact path='/edit/:id' ><ProductAddEdit type= {"Edit"}/></Route>
        <Route exact path='/products/add' ><ProductAddEdit type={"Add"} /></Route>
        <Route exact path='/products' component={ProductsPage} />
        <Route exact path='/products/:id' component={ViewPage} />
        <Route  path='/signin'  >
          { this.props.loggedIn ? <Redirect to='/register'/> : <Login/>}
        </Route>
        <Route  path='/chart' component={ChartsComponent} />
        <Route  path='/register' component={RegistrationPage} />
        </Switch>
      </div>
    )
  }
   
  
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  console.log('loggedIn', loggedIn)
  return { loggedIn: loggedIn };
}



export default connect(mapStateToProps)(App);
