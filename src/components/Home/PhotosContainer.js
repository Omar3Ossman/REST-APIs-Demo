import PhotoItem from './PhotoItem';
import './../../styles/PhotoItem.css'
import usePhotos from '../../Hooks/usePhotos';

const PhotosContainer = () => {
const{photos}=usePhotos()

  return <div className='photos-container'>
    {photos?.map(item=>{
    return (<PhotoItem key={item.id} id={item.id} imagePath={item.path}  />)
  })}
  </div>
}

export default PhotosContainer;
