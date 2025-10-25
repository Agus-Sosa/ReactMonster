import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PostCardProfile = ({ title, resume, date, }) => {

  const formattedDate = new Date(date).toLocaleDateString('es-AR');


  return (
    <Card 
      component={Link}
      sx={{ 
        width: '100%', 
        backgroundColor: '#2a2a2a', 
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        }
      }}
    >
     
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" sx={{fontWeight: 'bold'}}>{title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{color: '#b0b0b0', mt: 1}}>{resume}</Typography>
          <Typography variant="caption" display="block" sx={{ color: '#888', mt: 2 }}>Publicado el: {formattedDate}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default PostCardProfile