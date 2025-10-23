import { Box, Button } from '@mui/material'
import { useState } from 'react'
import hero_detail_monster from '../../assets/img/monsters/hero_detail_monster.png'
import DeleteBtnModal from '../Buttons/BtnDelete/DeleteBtnModal';

const MonsterDetailMobile = ({ monster,onUpdate, onDelete, userRole }) => {
        const [openModal, setOpenModal] = useState(false);
      const handleClose = () => { 
        setOpenModal(false);
      }
      const handleOpenModal = () => { 
        setOpenModal(true);
      }
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
              {
                  userRole === "admin" || userRole === "superadmin" &&
                  <Button variant="contained" color="error" sx={{mt:3, mb:1}} onClick={handleOpenModal}>
            Eliminar
          </Button>
              }
              <DeleteBtnModal onClose={handleClose} onDelete={onDelete} open={openModal} userRole={userRole}/>
               
          </Box>
    </Box>
)
}

export default MonsterDetailMobile