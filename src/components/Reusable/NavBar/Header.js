import React from 'react';
import './../../../styles/Header.css';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import AuthButtons from '../Button/AuthButtons';

const Header = () => {
return (
    <header id='header'>
        <div className='left-side'> 

        <Logo />
        <NavLinks />
        </div>
<div className='right-side'>
        <SearchBar />
        <AuthButtons />
</div>
    </header>
);
}

export default Header;
