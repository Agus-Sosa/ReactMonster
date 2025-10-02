import React from 'react'
import { IconButton, Typography, Box } from "@mui/material";
function CommentsSection() {
return (
    <>
    <Box
    component="section"
    sx={{
        width: "100%",
        border: "1px solid #ccc",  
        borderRadius: 2,
        padding: 2,
        backgroundColor: "transparent"
    }}
    >
        <Typography 
            variant="subtitle1" 
            sx={{ fontWeight: "bold", mb: 1 }}
        >
        Comentarios
        </Typography>

    
    </Box>

    </>
  )
}

export default CommentsSection