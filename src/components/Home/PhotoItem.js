import React from 'react'
import './../../styles/PhotoItem.css'
import { Link } from "react-router-dom";

function PhotoItem({id,imagePath}) {

return (
    <div className='photo-item'>
        <Link to={"/"+id}> 
            <img src={imagePath} alt={"img"} />
        </Link>
    </div>
)
}

export default PhotoItem;
