import { Box, Button, FormControl, Input, TextField, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
const Register = () => {

     const mobile = useMediaQuery("(max-width:700px)")


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

    const fieldTypes = [
        {placeholder: "Email", type:"email"},
        {placeholder:"password", type:"password"}
    ]


    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("Funcionando")
    }

    return (
        <>
        <Box component={Link} sx={{position:"absolute", top:0, left:0, textDecoration:"none", color:"white" , padding:1, m:1, background:"#8E1616", borderRadius:"4px"}} to="/">Volver atras</Box>
    <Box sx={{backgroundColor:"#212121", color:"white", height:"100vh", display:'flex', justifyContent:"center", alignItems:"center"}}>
        
        <FormControl sx={{textAlign:"center", width:`${mobile ? '100%' : "30%"}`}}>
            <Box component="h1" sx={{color:"white", mb:10}}>
            Registrarse
        </Box>
        {/* <Box sx={{display:"flex", flexDirection:"column", gap:3 }}>
            <Box placeholder='Nombre de usuario' component="input" sx={style_input}>
            </Box>
            <Box placeholder='Email' component="input" sx={style_input}>
            </Box>
            <Box placeholder='Contraseña' component="input" sx={style_input}>
            </Box>
        </Box> */}
        <AuthForm buttonText={"Registrarse"} fields={fieldTypes} onSubmit={handleSubmit} />


        {/* <Button variant='contained' sx={{my:3, py:2, background:'#8E1616', fontWeight:"bold"}}>
            Registrarse
        </Button> */}
      <Box component="div"> 
            ¿Ya tienes una cuenta?  <Link to="/login" style={{textDecoration:"none", color:"#D84040"}}>Iniciar Sesion</Link>
        </Box>
        </FormControl>
       
    </Box>
    </>
)
}



export default Register