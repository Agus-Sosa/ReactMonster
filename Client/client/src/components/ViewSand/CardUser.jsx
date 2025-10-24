import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Modal, Button } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonAdmin from './ButtonAdmin';
import CloseIcon from '@mui/icons-material/Close';

export default function CardUser({arena, fetchArenas}) {

// letter management
// manejo de la carta
  const [carta,setcarta] = React.useState(false);
  const handleOpen=()=>{
    setcarta(true);
  }
  const handleClose=()=>{
    setcarta(false);
  }
  return (
    <>
      {/* the letter loaded with the information brought from the viewUser */}
      {/* la carta cargada con la informacion traida de la viewUser */}
      <Card sx={{
        width: { xs: "100%", sm: 300, md: 345 },
        height: { xs: 400, sm: 450 },
        maxWidth: { xs: "100%", sm: 345 },
        border: '1px solid #E3E0C3',
        backgroundColor: '#212121',
        textAlign: 'center', m: 1
      }}>
     
        <CardMedia
          component="img"
          height="250"
          image={arena.arena_image_url}
          alt={`Imagen ${arena.arena_name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "#E3E0C3", fontFamily:"Anton"}}>
            {arena.arena_name}
          </Typography>
          <Button
              variant="outlined"
              onClick={handleOpen}
              sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3" }}
            >
              Ver más
          </Button>
          <ButtonAdmin arena={arena} fetchArenas={ fetchArenas } />
        </CardContent>
      
    </Card>
    
    {/* the modal that appears (letter) when you click on see more and gives more information about the arena */}
    {/* el modal que se habre(carta) al hacer click en ver mas y da mas informacion sbre la arena */}
    <Modal
      open={carta}
      onClose={handleClose}
      >
      <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: '#212121',
          border: '1px solid #E3E0C3',
          boxShadow: 24,
          p: { xs: 2, sm: 4 },
          borderRadius: '10px',
          outline: 'none',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}>
          <Box sx={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}>
            <Button onClick={handleClose} variant="contained" color="error"
               sx={{
                  minWidth: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  lineHeight: 1,
                  padding: 0,
                }} >
            <CloseIcon/>
            </Button>
          </Box>

          <CardMedia
          component="img"
          height="325"
          image={arena.arena_image_url}
          alt={`Imagen ${arena.arena_name}`}
          />
  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "#E3E0C3", fontFamily:"Anton",fontSize:{ xs: '18px', sm: '25px' }, textAlign:'center' }}>
            {arena.arena_name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3E0C3", fontFamily:"Anton",fontSize:'17px' }}>
            {arena.arena_description}
          </Typography>
        </CardContent>
    </Box>
    </Modal>
    </>
  );
}