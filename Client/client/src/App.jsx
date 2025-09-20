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
import LayoutLanding from './components/Layout/LayoutLanding';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Rutas que usan el LayoutLanding */}
          <Route element={<LayoutLanding />}>
            <Route path="/" element={<Home />} />
            <Route path="/foro" element={<Foro />} />
            <Route path="/foro/:id" element={<DetailPublish />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path="/arenas" element={<Sands />} />
          </Route>

          {/* Rutas sin un layout */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Ruta para manejar errores */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;