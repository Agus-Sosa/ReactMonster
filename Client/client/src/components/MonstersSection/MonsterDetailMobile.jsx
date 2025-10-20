import { Box } from '@mui/material'
import React from 'react'
import hero_detail_monster from '../../assets/img/monsters/hero_detail_monster.png'

const MonsterDetailMobile = ({monster}) => {
  return (
      <Box>
          <Box sx={{background: `url(${hero_detail_monster})`, height:"300px", overflowY:"hidden"}} >
              <Box component={"img"} sx={{width:"300px", margin:'auto', display:'flex'}} src={ `http://localhost:8080${monster.monster_image_url}`} />
          </Box>
          <Box sx={{backgroundColor:"#1E1E1E", color:"white", p:2}}>
              <Box component={"h1"}>
                {monster.monster_name}
              </Box>
              <Box component={"p"}>
                  {monster.monster_description}
              </Box>
          </Box>
    </Box>
)
}

export default MonsterDetailMobile