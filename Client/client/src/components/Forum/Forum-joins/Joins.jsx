import React from 'react'
import { Box, height } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


function Joins({informacion}) {
  return (
    <Card sx={{ width:'75%', height:'95px', margin:'20px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {informacion.titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {informacion.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Joins