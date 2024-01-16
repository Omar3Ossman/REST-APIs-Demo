import axios from 'axios';
import  { useEffect, useState } from 'react'

function usePhotos() {
    
const [photos,setPhotos] = useState([]);
const getPhotos = async () => {
    try{
        const photos=await axios.get('https://wallhaven.cc/api/v1/search');
    
         console.log(photos.data.data)
         setPhotos(photos.data.data)
    }catch(err){
        console.log(err)
    }

}

useEffect(()=>{
    getPhotos();
},[])

return  {photos}

}

export default usePhotos
