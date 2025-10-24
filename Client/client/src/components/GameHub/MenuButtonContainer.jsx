import { Box } from '@mui/material'
import React from 'react'
import MenuButtonCard from './MenuButtonCard'
import bg_campaing from '../../assets/img/gameHub/bg_campaing.png'
import bg_multiplayer from '../../assets/img/gameHub/bg_multi.png'
const MenuButtonContainer = () => {
    const dataMenu = [
        {
            title: "Campaña",
            image: bg_campaing,
            link:"/game"
            
        },
        {
            title: "Multijugador",
            image: bg_multiplayer,
            link:"/multiplayer"
        },
        {
            title: "Tienda",
            image: bg_campaing,
            link:"/store"
        }

  ]
  
    return (
        <Box sx={{display:"flex", gap:4}}>
            {
                dataMenu.map((button) => (
                    <MenuButtonCard title={button.title} image={button.image} link={ button.link} />
                ))
            }
        </Box>
)
}

export default MenuButtonContainer