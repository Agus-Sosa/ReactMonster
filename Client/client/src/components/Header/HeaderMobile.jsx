import Box from "@mui/material/Box"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import title_game from '../../assets/img/title_game.png'
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import ModalAuthPrev from "../Authentication/ModalAuthPrev";
import { Avatar } from "@mui/material";

const HeaderMobile = ({user, logoutButton}) => {
    const [openMenu, setOpenMenu]= useState(false);
    const [openModal, setOpenModal] = useState(false);


  const handleOpenModal =()=> {
    setOpenModal(true);
    setOpenMenu(false)
  }
  const handleCloseModal = ()=> {
    setOpenModal(false);
  }

   const handleOpenMenu = (newOpen) => () => {
    setOpenMenu(newOpen);
  };


  const listLink =[
    {name:"Foro", link:"#"},
  ]

    const listMobileMenu = (
        <Box component="header" sx={{height:"100%",position:"sticky", top:0,zIndex:1100,backgroundColor:"#1e1e1e", color:"white", display:"flex", flexDirection:"column", alignItems:"start",p:2, gap:2}}>
            <Box component="div" sx={{display: 'flex', justifyContent:"space-between", alignItems:"center", width:"100%"}}>
            <Link to='/'>
              <Box component="img" src={title_game} sx={{width:"100px"}}></Box>
            </Link>
            <Button onClick={handleOpenMenu(false)} sx={{color:"white", fontSize:"30px"}}>
                <CloseIcon/>
            </Button>   
            </Box>

            <Box component="div" sx={{width: "100%"}}>
                {listLink.map((item)=>(
                        <Box  key={item.name} style={{textDecoration:"none", color:"white", fontSize:"20px", padding:"10px", width:"100%", textAlign:"start"}} onClick={handleOpenMenu(false)}>{item.name}</Box>
                ))}

                {user ? (
                  <>
                  <Box component={Link} to={'/profile'} sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                    <Avatar  sx={{}} src={user.profile_picture}/>
                    <Box>
                      {user.user_name}
                    </Box>
                  </Box>
                  <Button
                  onClick={logoutButton}
                    sx={{width:"100%",color:"white", mt:2, background:"#D84040", textAlign:"center", p:"10px", borderRadius:"2px", fontSize:"20px", cursor:"pointer", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}
                    
                  >
                    Cerrar Sesion
                  </Button>
                                    </>

                ) :
                
                (
            <Button
                onClick={handleOpenModal}

                sx={{width:"100%",color:"white", mt:2, background:"#D84040", textAlign:"center", p:"10px", borderRadius:"2px", fontSize:"20px", cursor:"pointer", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}
                
                >
                    Jugar Ahora

                </Button>
                )}
                

            </Box>
        </Box>
    )


  return (
  <Box component="header" sx={{display:"flex", justifyContent:"space-between  ", alignItems:"center", backgroundColor:"#1e1e1e", color:"white", p:2}} >
    <Box component="img" src={title_game} sx={{width:"100px"}}>
    </Box>



    <Button  onClick={handleOpenMenu(true)}>
        <MenuRoundedIcon sx={{color:"white"}}/>
    </Button>
    <Drawer PaperProps={{sx:{width:"100%"}}} open={openMenu} onClose={handleOpenMenu(false)} anchor="left">
        {listMobileMenu}
    </Drawer>
        <ModalAuthPrev handleCloseModal={handleCloseModal} openModal={openModal}/>

  </Box>
  
)
}

export default HeaderMobile