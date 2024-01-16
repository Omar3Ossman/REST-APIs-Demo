import React from 'react'
import './../../styles/HomePage.css'; 
import {FaClock} from 'react-icons/fa';

const HomeHeader = () => {
return (
    <>    
    <div className='listing-header'>
    <h1><FaClock /> Latest</h1>
    <p>The latest wallpapers uploaded by our awesome community!</p>
    </div>
    </>

)
}

export default HomeHeader;
