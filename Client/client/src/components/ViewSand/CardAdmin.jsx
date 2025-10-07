import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import espera from "../../assets/img/arenas/espera.webp"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const CardAdmin = () => {
 
  return (
    <>
    <Card sx={{ maxWidth: { xs: "100%", sm: 345 }, border: '1px solid #E3E0C3',backgroundColor:'#212121', textAlign:'center', m:1  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={espera}
          alt="green iguana"
        />
        <CardContent>
          <Button variant="outlined">agregar arena</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
  );
}
export default CardAdmin
