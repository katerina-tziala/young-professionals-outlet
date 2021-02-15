import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <NavLink className='footer-logo' to='/'></NavLink>
                <p className='footer-text'>Copyright &#169; 2021 All Rights Reserved</p>
                <p className='footer-subtext'>powered by A.Tziala</p>
            </footer>
        </>
    )
};

export default Footer;
 