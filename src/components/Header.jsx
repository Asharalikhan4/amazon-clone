import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
        <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        <div className='header_search'>
        <input className='header_searchInput' type="text"/>
        </div>
        <div className='header_nav'>
        <div className='header_option'>
        <span className='header__optionLineOne'>
            Hello guest
        </span>
        <span className='header__optionLineOne'>
            Sign In
        </span>
        </div>
        <div className='header_option'>
        <span className='header__optionLineOne'>
            Returns
        </span>
        <span className='header__optionLineOne'>
            & Orders
        </span>
        </div>
        <div className='header_option'>
        <span className='header__optionLineOne'>
            Your
        </span>
        <span className='header__optionLineOne'>
            prime
        </span>
        </div>
        </div>
        </div>
    )
}

export default Header;