import Box from '@mui/material/Box'
import title_game from '../../assets/img/title_game.png'
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import AdminBtn from './AdminBtn';
const HeaderDesktop = ({user, logoutButton}) => {
 

  return (
    <>
    
    <Box component="header" sx={{display:"flex",position:"sticky", top:0,zIndex:1100, justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}}>
        <Box sx={{display:"flex", gap:2, alignItems:"center"}}>

        <Link to='/'>
        <Box component="img" src={title_game} sx={{width:"100px"}}>
        </Box>
        </Link>
           <Box component={Link} to="/foro"   sx={{ p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", textDecoration:"none",transition:"all .5s", "&:hover":{color:"#8E1616"}}}>
            Comunidad
          </Box>
          <AdminBtn/>
                </Box>

        <Box component="nav" sx={{display:"flex", gap:2, alignItems:"center"}}>
    
      <AuthButton user={user} logoutButton={logoutButton}/>
        </Box>

    </Box>
        </>

    
)
}

export default HeaderDesktop