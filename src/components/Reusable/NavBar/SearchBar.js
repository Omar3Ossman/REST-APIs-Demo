import React, { useState } from 'react'
import './../../../styles/SearchBar.css';
import{FaSearch}from"react-icons/fa"
import { IconContext } from 'react-icons/lib';
const SearchBar = () => {
    const[value,setValue]=useState('')
return (
    <div className='searchBar-container'>
        <div className='header-search-input-frame'>
            <input type="search" id='header-search-text' value="" placeholder="Search..."></input>
        </div>
        <IconContext.Provider className='icon-search' value={{color:"whitesmoke"} }>
        <button className='fa-search'>
            <FaSearch/>
        </button>
        </IconContext.Provider>

    </div>
)
}

export default SearchBar;
