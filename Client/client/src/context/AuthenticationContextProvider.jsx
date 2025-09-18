import React from 'react'
import { useState } from 'react'
import { AuthenticationContext } from './AuthContext';


const valueToken = localStorage.getItem('react_monster_token');



export const AuthenticationContextProvider = ({children}) => {
  const [token, setToken] = useState(valueToken);


  const handleUserLogin = (token)=> {
    localStorage.setItem('react_monster_token', token);
    setToken(token)
  };


  const handleUserLogout = ()=>{
    localStorage.removeItem('react_monster_token');
    setToken(null);

  
  }


  return (
    <AuthenticationContext value={{token, handleUserLogin, handleUserLogout}}>
      {children}
    </AuthenticationContext>
  )
}

export default UserContext