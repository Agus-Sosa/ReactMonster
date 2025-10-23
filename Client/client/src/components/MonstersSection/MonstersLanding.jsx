import Box from '@mui/material/Box';
import MonsterContainer from './MonsterContainer';
import PageContainer from '../Layout/PageContainer/PageContainer';
import hero_monster from '../../assets/img/hero_bg_monsters.png'
import title_hero from '../../assets/img/Monsters-title.png'
import CreateBtnModal from '../Buttons/BtnCreate/CreateBtnModal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import BtnFloatingCreate from '../Buttons/BtnCreate/BtnFloatingCreate';
function MonstersLanding() {
  const {token , user} = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => { 
    setOpenModal(false);
  }
  const handleOpen = () => { 
    setOpenModal(true);
  }
  
  
const handleCreate =async (newMonster) => { 
      try {
        const res = await fetch(`http://localhost:8080/monsters/`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          method: "POST",
          body: JSON.stringify(newMonster)
        })

        if (!res.ok) {
          console.log("Error al eliminar la noticia");
          return;
        }


      } catch (error) {
        console.log(error)
      }
  }

  const monsterFields = [
  { name: "monster_role", label: "Rol del monstruo", type: "text" },
  { name: "monster_name", label: "Nombre del monstruo", type: "text" },
  { name: "monster_description", label: "Descripción", type: "text" },
  { name: "monster_image_url", label: "URL de imagen (tarjeta)", type: "text" },
];



  return (
    <Box 
      sx={{ 
        backgroundColor: '#212121',
      }}
    >
    <Box  sx={{width:"100%", display:"flex", alignItems:"center" ,height:{xs:"40vh", md:"40vh", background: `url(${hero_monster})`, backgroundSize:"cover",}}}>
      <PageContainer>
      <Box component='img' src={title_hero} sx={{width:{ xs: "300px", md:"500px"}}} ></Box>

      </PageContainer>
    </Box> 
  
      <PageContainer>
        
        <BtnFloatingCreate onClick={handleOpen} user={user}>Crear monstruo</BtnFloatingCreate>
        <CreateBtnModal onClose={handleClose} open={openModal} onCreate={handleCreate} userRole={user?.role} inputFields={monsterFields} />
        <MonsterContainer />
      </PageContainer>
    </Box>
  );
}

export default MonstersLanding;