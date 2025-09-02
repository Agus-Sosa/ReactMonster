import React from 'react'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Foro from './pages/Foro';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foro" element={<Foro />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
