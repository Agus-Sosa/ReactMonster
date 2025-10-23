
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NewCard({id,imageUrl, title, resume,date}) {
  /*Formateo la fecha que trae el sv */
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  const fechaFormateada = `${day}/${m}/${y}`

  const imageSrc = imageUrl.startsWith("http")
  ? imageUrl
  : `http://localhost:8080${imageUrl}`;

  return (

    <Box component={Link} to={`/new/${id}`} sx={{
    
    textDecoration:"none", 
    color:"black",
    height: { xs: 'auto',md:'450px'},
    
      display: "block", 
    minWidth:"400px",
    maxWidth: { xs: '90vw', md: '400px' },
    transition:"all 0.5s",
    borderRadius:"10px",
    border:"1px solid #E3E0C3",
      ":hover": {border:"solid 1px #380E00"},
    p: 1,
    }}>
      <Box sx={{width:"auto", height:{xs:"300px", md:"250px"}, mb:1}}>
        <Box component='img' src={imageSrc} sx={{ display: imageUrl? "block" : "none", width:"100%", height:"100%",objectFit:"cover"}}/>

      </Box>
      <Box component="div" sx={{width:"auto"}}>
        <Box component="p" sx={{fontWeight:"bold", color:"#380E00"}}>{fechaFormateada}</Box>
        <Box component="h4" sx={{fontSize:{xs:"14px", md:"20px"}}}>{title}</Box>
        <Box component='p'>{resume}</Box>
      </Box>
    </Box>
    
  );
}