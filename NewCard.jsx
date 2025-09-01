import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="C:\Users\Usuario\Desktop\Sin título.png"
          alt="noticia imagen"
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            3 de agosto 2025
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            El horror despierta
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Una nueva criatura surge de las profundidades
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}