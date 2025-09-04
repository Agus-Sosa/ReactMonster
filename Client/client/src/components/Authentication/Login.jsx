import { Box, Button, FormControl } from '@mui/material'
import { Link } from 'react-router-dom'
const Login = () => {
    const style_input = {
        p:2,
        border:"none",
        outline: "none",
        backgroundColor:"#2b2b2bff",
        color:"white",
        fontSize:"16px",    
        borderRadius:"4px",
        border:"0.5px solid gray"
    }

    return (
      <>
              <Box component={Link} sx={{position:"absolute", top:5, left:5, textDecoration:"none", color:"white" , padding:1, m:1, background:"#8E1616", borderRadius:"4px"}} to="/">Volver atras</Box>

    <Box sx={{backgroundColor:"#212121", color:"white", height:"100vh", display:'flex', justifyContent:"center", alignItems:"center"}}>
        
        <FormControl sx={{textAlign:"center", width:"30%"}}>
            <Box component="h1" sx={{color:"white", mb:10}}>
            Iniciar Sesion
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:3 }}>
            <Box placeholder='Nombre de usuario' component="input" sx={style_input}>
            </Box>
            <Box placeholder='Email' component="input" sx={style_input}>
            </Box>
            <Box placeholder='Contraseña' component="input" sx={style_input}>
            </Box>
        </Box>
        <Button variant='contained' sx={{my:3, py:2, background:'#8E1616', fontWeight:"bold"}}>
            Iniciar Sesion
        </Button>
      <Box component="div"> 
            ¿No tienes cuenta?  <Link to="/register" style={{textDecoration:"none", color:"#D84040"}}>Registrarse</Link>
        </Box>
        </FormControl>
       
    </Box>
          </>

)
}

export default Login;