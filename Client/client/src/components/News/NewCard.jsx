import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NewCard({id,imageUrl, title, resume,date}) {

  /*Formateo la fecha que trae el sv */
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  const fechaFormateada = `${day}/${m}/${y}`
  return (

    <Box component={Link} to={`/notice/${id}`} sx={{
    
    textDecoration:"none", 
    color:"#E3E0C3",
    width: "100%",
    height: '450px',
    color:"black",
    display: "block", 
    transition:"all 0.5s",
    borderRadius:"10px",
    border:"1px solid #E3E0C3",
      ":hover": {border:"solid 1px #380E00"},
    p: 1,
    }}>
      <Box sx={{width:"auto", height:{xs:"300px", md:"250px"}, mb:1}}>
        <Box component='img' src={imageUrl} sx={{ width:"100%", height:"100%",objectFit:"cover"}}/>

      </Box>
      <Box component="div">
        <Box component="p" sx={{fontWeight:"bold", color:"#380E00"}}>{fechaFormateada}</Box>
        <Box component="h4" sx={{fontSize:{xs:"14px", md:"20px"}}}>{title}</Box>
        <Box component='p'>{resume}</Box>
      </Box>
    </Box>
    
  );
}