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
import MonsterDetail from './components/MonstersSection/MonsterDetail';
import NewDetails from './components/News/NewDetails';
import AuthenticationContextProvider from './context/AuthenticationContextProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProfileUser from './components/Profile/ProfileUser';
import AllNews from './components/News/AllNews';
import SettingsProfile from './components/Profile/SettingsProfile';
import PublicRoute from './components/ProtectedRoute/PublicRoute';
import { ToastContainer } from 'react-toastify';
import Admin from './pages/Admin';
import GameMenu from './pages/GameMenu';
import Game from'./pages/Game'

function App() {
  return (
    <>
    <AuthenticationContextProvider>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      <Router>
        <Routes>
          {/* Rutas que usan el LayoutLanding */}
          <Route element={<LayoutLanding />}>
            <Route path="/" element={<Home />} />
            <Route path='/new/:id' element={<NewDetails/>}/>
            <Route path="/foro" element={<Foro />} />
            <Route path="/foro/:id" element={<DetailPublish />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path='/monsters/:id'element={<MonsterDetail/>}/>
            <Route path="/arenas" element={<Sands />} />
            <Route path='/allnews' element={<AllNews/>}/>
              <Route path='/profile/:id_user' element={
                <ProtectedRoute>
                <ProfileUser />
                </ProtectedRoute>
              } />
              <Route path='/admin' element={<ProtectedRoute requiredRole={"superadmin"}><Admin /></ProtectedRoute>} />
              <Route path="/game" element={
              <ProtectedRoute>
                   <Game />
              </ProtectedRoute>
               } />
      <Route path='/settings' element={
        <ProtectedRoute>
          <SettingsProfile/>
        </ProtectedRoute>
      }/>

          </Route>

          {/* Rutas sin un layout */}
            <Route path="/register" element={
              <PublicRoute>
                  <Register />
              </PublicRoute>
             } />
            <Route path="/login" element={
              <PublicRoute>

                <Login />
            </PublicRoute>

              } />
            <Route path='/menuGame' element={ 
              <ProtectedRoute>
                <GameMenu/>
              </ProtectedRoute>
            } />

          {/* Ruta para manejar errores */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
          </AuthenticationContextProvider>

    </>
  );
}

export default App;