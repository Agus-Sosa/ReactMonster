import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Box } from '@mui/material';

const ProfileUser = () => {
    const {user} = useContext(AuthContext);
  return (
    <Box>
        
    </Box>
  )
}

export default ProfileUser