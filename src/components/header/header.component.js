import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.css';

const Header = ({logon, logout}) => (
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
        {logon?
       <Link className='option' to='/signout' onClick={() => logout}>
       Sign Out
</Link>: <Link className='option' to='/signin'>
        Sign In
    </Link>
          }
         
        </div>
    </div>
)

export default Header;