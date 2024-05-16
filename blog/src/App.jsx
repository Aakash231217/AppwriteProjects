import { useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { Header } from './components';
import {Footer} from './components';
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
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
      test

    </div>
  ):null
}

export default App
