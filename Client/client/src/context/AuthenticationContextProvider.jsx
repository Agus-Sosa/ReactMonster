import React, { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from './AuthContext';
import {jwtDecode} from 'jwt-decode';



const valueToken = localStorage.getItem('react_monster_token');



export const AuthenticationContextProvider = ({children}) => {
  const [token, setToken] = useState((valueToken));
  const [user, setUser] = useState(null);


  useEffect(()=> {
    if(token){
      const tokenDecode = jwtDecode(token);
      setUser(tokenDecode);
    } else {
      setUser(null)
    }
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
    <AuthContext.Provider value={{token, handleUserLogin, handleUserLogout, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthenticationContextProvider;