import React from 'react';
import './Header.css';
// import nav from '../../images/nav.jpg'


const Header = () => {
    return (
        <nav className='headerContainer'>
            <h2>Knowledge World</h2>
            <div className='header-inner'>
                <a href="/blog">Blog</a>
                <a href="/about-us">About Us</a>
                <a href="/User">Account</a>
                
            </div>
        </nav>
    );
};

export default Header;