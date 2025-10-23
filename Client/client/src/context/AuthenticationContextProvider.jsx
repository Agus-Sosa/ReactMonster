import React, { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from './AuthContext';
import {jwtDecode} from 'jwt-decode';



const valueToken = localStorage.getItem('react_monster_token');



export const AuthenticationContextProvider = ({children}) => {
  const [token, setToken] = useState((valueToken));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  /* 
  Mystical note, there was an error that verified faster than it loaded, so it redirected before verifying,
  that's why the loading passed. damn tennis 
  */



  useEffect(()=> {
    if(token){
      const tokenDecode = jwtDecode(token);
      const nowDate = Date.now() / 1000;
      
      if (tokenDecode.exp < nowDate) // con esto verifica si el token expiro y si es asi cierra sesion automaticamente 
        handleUserLogout();
      else { 
          setUser(tokenDecode);

      }

    } else {
      setUser(null)
    }
    setLoading(false);
  },[token])
  
  const handleUserLogin = (newToken)=> {
    localStorage.setItem('react_monster_token', newToken);
    setToken(newToken);
    const tokenDecode = jwtDecode(newToken);
    setUser(tokenDecode);

  };


  const handleUserLogout = ()=>{
    localStorage.removeItem('react_monster_token');
    setToken(null);
    setUser(null)
  }




  return (
    <AuthContext.Provider value={{token, handleUserLogin, handleUserLogout, user,loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthenticationContextProvider;