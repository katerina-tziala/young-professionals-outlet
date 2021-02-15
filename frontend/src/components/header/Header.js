import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className='header'>
                <NavLink className='header-logo' to='/'></NavLink>
                <h1 className='header-text'>Young Professionals Outlet</h1>
                <NavLink className='header-products-nav' to='/products'>products</NavLink>
            </header>
        </>
    )
};

export default Header;
 