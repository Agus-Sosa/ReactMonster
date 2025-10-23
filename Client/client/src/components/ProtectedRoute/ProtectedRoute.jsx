import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate,  } from 'react-router-dom'
import Loading from '../LoadingComp/Loading'

export const ProtectedRoute = ({children,requiredRole}) => {
    const {user,loading} = useContext(AuthContext)

    if (loading) {
    return <Loading/>;
  }
    if (!user) return <Navigate to={'/login'} replace />
    
    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to={"/"} replace />;
    }


    return children
}

export default ProtectedRoute