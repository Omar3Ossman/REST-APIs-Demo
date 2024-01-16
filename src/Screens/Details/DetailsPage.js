import React from 'react'
import MainDisplay from '../../components/Details/MainDisplay'
import SideBar from '../../components/Details/SideBar'
import usePhotoDetails from '../../Hooks/usePhotoDetails'

const DetailsPage = () => {
   const{dx,dy,image}=usePhotoDetails();

return (
    <div style={{display:'flex',width:"100%",height:"95vh"}}>
        <SideBar dx={dx} dy={dy}/>
        <MainDisplay  image={image}/>
    </div>
)}

export default DetailsPage
