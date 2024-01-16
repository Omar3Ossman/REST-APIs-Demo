import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const usePhotoDetails = () => {
    const{id}=useParams()
    const [details,setDetails] =useState({dx:"",dy:"",path:""});
    const getPhotoDetails= async ()=>{
        try{
            const detailsData= await axios.get(`https://wallhaven.cc/api/v1/w/${id}`)
            console.log(detailsData.data)
            setDetails({...details,dx: detailsData.data.data.dimension_x
                ,dy:detailsData.data.data.dimension_y ,
                path:detailsData.data.data.path}  )
        }
        catch(err){
            console.log(err);   
        }
    }
useEffect(()=>{
    getPhotoDetails()
},[])

//{key:value,key2:value2,key3:value3}
    return {image:details.path,dx:details.dx,dy:details.dy}
}

export default usePhotoDetails
