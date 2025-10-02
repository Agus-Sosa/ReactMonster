import { Box, Button, FormControl, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
const Login = () => {
    const mobile = useMediaQuery("(max-width:700px)")
    




 

    return (
    <>
    <Box sx={{backgroundColor:"#212121", color:"white", minHeight:"100vh", display:'flex',width:"100%", justifyContent:"center", alignItems:"center", gap:1}}>
        <Box component={Link} sx={{textDecoration:"none", color:"white" , padding:1, m:1, background:"#8E1616", borderRadius:"4px", top:0, left:0, position:'absolute'}} to="/">Volver atras</Box>
        <Box sx={{textAlign:"center", width:`${mobile ? '100%' : "30%"}`, mx:2}}>
        <Box component="h1" sx={{color:"white", mb:10}}>
            Iniciar Sesion
        </Box>
        <AuthForm isForLogin={true} />
        <Box component="div"> 
            ¿No tienes cuenta?  <Link to="/register" style={{textDecoration:"none", color:"#D84040"}}>Registrarse</Link>
        </Box>
        </Box>
    </Box>
    </>

)
}

export default Login;