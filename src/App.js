import './App.css';
import DetailsPage from './Screens/Details/DetailsPage';
import HomePage from './Screens/Home/HomePage';
import Header from './components/Reusable/NavBar/Header';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <div className='main'>
    
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/:id' element ={<DetailsPage/>}/>        
      </Routes>
    </div>
    </>
  );
}

export default App;
