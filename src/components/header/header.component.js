import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.css';
import * as userActions  from '../../redux/users/actions/users.action' ;
import { connect } from 'react-redux';

const Header = ({logon, logut}) => (
    <div className='header'>
        <div>
        <Link className='logo-container' to='/'>
        </Link>
        </div>
        <div className='options'>
        <Link className='option' to='/about'>
            About
        </Link>
        <Link className='option' to='/products'>
            Products
        </Link>
        <Link className='option' to='/chart'>
            Charts
        </Link>
        { !logon?
        <Link className='option' to='/signin'>
        Sign In
    </Link>:
       <a className='option'  onClick={() =>  logut()}>
       Sign Out
</a>
          }
         
        </div>
    </div>
)

function mapDispatchToProps(dispatch)  {
  
    return {
      logut: () => {dispatch(userActions.logout())}
    } 
  }

export default connect(null, mapDispatchToProps)(Header);