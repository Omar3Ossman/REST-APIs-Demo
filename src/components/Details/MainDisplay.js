import React from 'react'
import './../../styles/Details.css'

const MainDisplay = ({image}) => {
  return (
    <div className='main-side'>
        <img src={image}/>
    </div>
  )
}

export default MainDisplay
