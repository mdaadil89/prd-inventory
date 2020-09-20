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
import GuardedRoute from './guard.route'
import Profile from './components/login/profile.component';



class App extends React.Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        <Header logon={this.props.loggedIn} />
        <Switch>
        <Route exact path='/' component={AboutPage} />
        <GuardedRoute exact path='/edit/:id' type= {"Edit"} auth={this.props.loggedIn} component={ProductAddEdit}/>
        <GuardedRoute exact path='/products/add'  type={"Add"}  auth={this.props.loggedIn} component={ProductAddEdit}/>
        <Route exact path='/products' component={ProductsPage} />
        <GuardedRoute exact path='/products/:id' auth={this.props.loggedIn} component={ViewPage} />
        <GuardedRoute exact path='/profile' auth={this.props.loggedIn} component={Profile} />
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
  return { loggedIn };
}



export default connect(mapStateToProps)(App);
