import { useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import  Header from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import './App.css'
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
       if(userData){
        dispatch(login({}));
       }else{
        dispatch(logout())
       }
    })
    .finally(()=>setLoading(false));
  },[])
  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
      Working in test mode !!!

    </div>
  ):null
}

export default App
