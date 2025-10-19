import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const BtnFloatingCreate = ({onClick, user}) => {
  
      if (!user || (user.role !== "admin" && user.role !== "superadmin")) return null;

    return (
      <Tooltip title="Crear"
          onClick={onClick}
          sx={{
              background: "#8E1616",
              color:"white",
          position: "fixed",
              bottom: 32,
          p:2,
          right: 32,
              zIndex: 1000,
              ":hover": {
                    backgroundColor: "#8E1616",
          }
        }}
      >
  <IconButton>
    <AddIcon />
  </IconButton>
</Tooltip>  )
}

export default BtnFloatingCreate