import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Modal, Button } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonAdmin from './ButtonAdmin';

export default function CardUser({arena, fetchArenas}) {


  const [carta,setcarta] = React.useState(false);
  const handleOpen=()=>{
    setcarta(true);
  }
  const handleClose=()=>{
    setcarta(false);
  }
  return (
    <>
    <Card sx={{ maxWidth: { xs: "100%", sm: 345 }, border: '1px solid #E3E0C3',backgroundColor:'#212121', textAlign:'center', m:1  }}>
     
        <CardMedia
          component="img"
          height="250"
          image={arena.arena_image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "#E3E0C3", fontFamily:"Anton"}}>
            {arena.arena_name}
          </Typography>
          <Button
              variant="outlined"
              onClick={handleOpen}
              sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3", fontFamily: "Anton" }}
            >
              Ver más
          </Button>
          <ButtonAdmin arena={arena} fetchArenas={ fetchArenas } />
        </CardContent>
      
    </Card>
    
    
    <Modal
    open={carta}
    onClose={handleClose}>
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
          borderRadius: '10px'
        }}>

        <CardMedia
          component="img"
          height="325"
          image={arena.arena_image_url}
          alt="green iguana"
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