import React, { useState } from 'react'
import ModalAuthPrev from '../Authentication/ModalAuthPrev';
import { Avatar, Box, Button, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthButton = ({user,logoutButton,isOpenModalMobile }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal =()=> {
        setOpenModal(true);
    }
    const handleCloseModal = ()=> {
        setOpenModal(false);
    }
    const mobile = useMediaQuery("(max-width:750px)")


    if(!mobile) {
    return (
        <>
        {user ? (
            <>

            <Box >
                <Avatar   onClick={handleClick} alt="Remy Sharp" sx={{cursor:"pointer"}} src={user.profile_picture} />
            </Box>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                backgroundColor: "#333333ff",
                textDecoration:"none",
                fontSize:"10px",
                border:"0.5px solid gray",
                color: "white",
                borderRadius: 2,
                minWidth: 200,
                minHeight:100,
                
                p: 1,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
                }
            }}
            slotProps={{
            list: {
                'aria-labelledby': 'basic-button',
            },
            }}
        >
            <MenuItem  sx={{p:1, borderRadius: 2,":hover":{background:"#424242ff"}}} >
            <Box component={Link}  sx={{textDecoration:"none" , color: 'white', width:"100%" }} to={`/profile/${user.id}`}>Ver perfil</Box>
            </MenuItem>
            <MenuItem sx={{p:1, borderRadius:2, ":hover":{background:"#424242ff"}}} >
                <Box component={Link} sx={{textDecoration:"none" , color: 'white', width:"100%"}} to={'/settings'}>Ajustes</Box>
            </MenuItem>
            <MenuItem sx={{p:1, borderRadius:2, ":hover":{background:"#424242ff"}}} onClick={logoutButton}>Cerrar Sesion</MenuItem>
        </Menu> 
        

            </>
        
            
            ): (

            
            <Box onClick={handleOpenModal} component="button" sx={{backgroundColor:"#8E1616", p:"10px" , border:"none", color:"white", cursor:"pointer", fontSize:"18px", borderRadius:"3px", transition:"all .5s", "&:hover":{backgroundColor:"#380E00"}}}>
                Jugar Ahora
            </Box>
            )
        }

            <ModalAuthPrev handleCloseModal={handleCloseModal} openModal={openModal}/>

        </>
    )




        } else {
            return (
                <>
                {user ? (
                    <>
                    <Box component={Link} onClick={isOpenModalMobile} to={'/profile'} sx={{display:'flex', justifyContent:"start", width:"100%", textDecoration:"none", color:"white",gap:2, alignItems:"center"}}>
                        <Avatar  sx={{}} src={user.profile_picture}/>
                        <Box>
                        {user.user_name}
                        </Box>
                    </Box>
                    <Button
                    onClick={logoutButton}
                        sx={{width:"100%",color:"white", mt:2,textAlign:"start", p:0,justifyContent:"start", borderRadius:"2px", cursor:"pointer",fontSize:'16px', transition:"all .5s"}}
                        
                    >
                        Cerrar Sesion
                    </Button>
                                        </>

                    ) :
                    
                    (
                <Button
                    onClick={handleOpenModal}

                    sx={{width:"100%",color:"white", mt:2, background:"#D84040", textAlign:"center", p:"10px", borderRadius:"2px", fontSize:"medium", fontWeight:"semi-bold",cursor:"pointer", transition:"all .5s", "&:hover":{backgroundColor:"#8E1616"}}}
                    
                    >
                        Jugar Ahora

                    </Button>
                    )}
                            <ModalAuthPrev handleCloseModal={handleCloseModal} openModal={openModal}/>

                </>
            )
        }
    
    }

export default AuthButton