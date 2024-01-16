import React from 'react'
import './../../styles/Details.css'
const SideBar = ({dx,dy}) => {
return (
    <div className='whole-bar'>
        <h3>
        {`${dx} X ${dy}`}    
        </h3>
        <h6>
            Search for similar...
        </h6>
        <span>
            Source not provided
        </span>
    </div>
)
}

export default SideBar
