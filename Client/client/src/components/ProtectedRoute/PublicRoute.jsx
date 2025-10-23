import React from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'


// Este codigo es igual al ProtectedRoute pero es para que la gente logueada no acceda para registrarse o loguearse
const PublicRoute = ({ children }) => {
    const {user} = useContext(AuthContext)
    if(user) return <Navigate to={"/"} replace/>
    
    return children;
}

export default PublicRoute