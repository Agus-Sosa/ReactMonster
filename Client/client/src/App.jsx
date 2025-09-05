import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foro from './pages/Foro';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Loader from './Loader';
import { Box } from '@mui/material';


function App() {
const [loading, setLoading] = useState(true);


useEffect(()=> {

  
  const timer = setTimeout(()=> {
    setLoading(false);

  }, 2000)
  
}, [])


if (loading) return <Box sx={{height:"100vh", background:"black", display:'flex', justifyContent:"center", alignItems:'center'}}><Loader/></Box>



  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/foro" element={<Foro />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
