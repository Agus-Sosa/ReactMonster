import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function NewCard({inf}) {

  /*Formateo la fecha que trae el sv */
  const d = new Date(inf.date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  const fechaFormateada = `${day}/${m}/${y}`
  return (

    <Card sx={{ maxWidth: 345, color:'#E3E0C3', backgroundColor: '#380E00', border:'1px solid #E3E0C3'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={inf.imageUrl}
          alt="noticia imagen"
        />
        <CardContent >
            <Typography variant="body2" sx={{ color: '#E3E0C3' }}>
            {fechaFormateada}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {inf.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#E3E0C3' }}>
            {inf.resume}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}