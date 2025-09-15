import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foro from './pages/Foro';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Monsters from './pages/Monsters';
import Sands from './pages/Sands';
import DetailPublish from './components/Forum/detailPublic/DetailPublish';



function App() {
  


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/foro" element={<Foro />} />
        <Route path='/foro/:id' element={<DetailPublish/>}/>
        <Route path="/monsters" element={<Monsters />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/arenas' element={<Sands/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
