import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.css';

const Header = () => (
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
        <Link className='option' to='/signin'>
            Sign In
        </Link>
        <Link className='option' to='/signout'>
            Sign Out
        </Link>
        </div>
    </div>
)

export default Header;