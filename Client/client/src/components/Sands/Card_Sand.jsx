import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Card_Sand({arena}) {
  return (
    <Card sx={{ maxWidth: 345, border: '1px solid #E3E0C3',backgroundColor:'#212121'  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={arena.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "#E3E0C3", fontFamily:"Anton"}}>
            {arena.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: "#E3E0C3", fontFamily:"Anton" }}>
            {arena.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}