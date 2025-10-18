import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import bg_main_menu from '../assets/img/gameHub/bg_main_menu.png'
import game_title from "../assets/img/title_game.png";
import MenuButtonContainer from '../components/GameHub/MenuButtonContainer';
import DescPlayerCardContainer from '../components/GameHub/DescPlayerCardContainer';
import { AuthContext } from '../context/AuthContext';

const GameMenu = () => {
  const [userData, setUserData] = useState({});
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const fetchGetUser = async () => { 
      try {
        const response = await fetch(`http://localhost:8080/users/${user.id}`)

        if (!response.ok) { 
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data.user);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchGetUser();
  })

  return (
    <Box sx={{background: `url(${bg_main_menu})`,display:'flex', flexDirection:'column', alignItems:"center", backgroundPosition:"center", backgroundSize:"cover", minHeight:"100vh", width:"100%"}}>
      <Box component={"img"} src={game_title} sx={{ width: { md: "400px" } }} />
      <DescPlayerCardContainer user={userData}/>
      <MenuButtonContainer />
    </Box>
  )
}

export default GameMenu