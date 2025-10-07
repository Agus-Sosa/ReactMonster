import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginRequired = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',
        backgroundColor:"#333333ff",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          textAlign: 'center',
          borderRadius: 2,
          backgroundColor:"#535353ff"
        }}
      >
        <LockOutlinedIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          Acceso restringido
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Necesitas estar logueado para ver este contenido.
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleLoginClick}
          fullWidth
        >
          Ir al login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginRequired;