import React from 'react'
import { Box, color, height } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import './joins.css'

function Joins({informacion}) {
  return (
    <Card sx={{ width:'100%', height:'95px', margin:'20px',backgroundColor:'transparent',color:'white',border: '1px solid white'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <img src={informacion.image} className='forum-icons'/>
            {informacion.titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            {informacion.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Joins