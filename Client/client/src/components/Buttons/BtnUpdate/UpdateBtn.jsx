import { Button } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
const UpdateBtn = ({ onClick, userRole }) => {
    
          if (!userRole || (userRole !== "admin" && userRole !== "superadmin")) return null;

  return (
      <Button sx={{backgroundColor:"#E3E0C3", color:"black"}} onClick={onClick}>
          <EditIcon/>
    </Button>
)
}

export default UpdateBtn