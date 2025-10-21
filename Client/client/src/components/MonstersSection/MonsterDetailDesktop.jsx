import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import PageContainer from '../Layout/PageContainer/PageContainer'
import hero_detail_monster from '../../assets/img/monsters/hero_detail_monster.png'
import { useState } from 'react'
import DeleteBtnModal from '../Buttons/BtnDelete/DeleteBtnModal'
import UpdateBtn from '../Buttons/BtnUpdate/UpdateBtn'
import { AuthContext } from '../../context/AuthContext'
import UpdateBtnModal from '../Buttons/BtnUpdate/UpdateBtnModal'

const MonsterDetailDesktop = ({ monster, onDelete,onUpdate,userRole , initialFieldInputs, inputFields }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const handleClose = () => { 
    setOpenModal(false);
  }
  const handleOpenModal = () => { 
    setOpenModal(true);
  }

  const handleOpenUpdateModal = () => { 
    setOpenModalUpdate(true);
  }

  const handleCloseUpdateModal = () => { 
    setOpenModalUpdate(false);
  }

 return (
        <Box sx={{ maxHeight: "100vh", minHeight:"80vh",background: `url(${hero_detail_monster})`, backgroundPosition:"center", backgroundSize:"cover", overflowY:"hidden"}}>
            <PageContainer>
                <Box sx={{display:'flex', alignItems:'start'}}>
                    
                    <Box sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "start", 
            minHeight: "100vh", 
                    color: "white",
            
            width:"50%"
                    }}
                    >
                     <Box component="h1" sx={{ fontSize: { xs: "50px", md: "70px" }, color: 'white', fontStyle: "italic" }}>{monster.monster_name}</Box>
           <Box sx={{ mt: 3, mb: 1 , display:"flex", gap:2,  alignItems:"center"}}>
             
                     {
                        (userRole === "admin" || userRole === "superadmin") &&
                         <Button variant="contained" color="error"  onClick={handleOpenModal}>
                            Eliminar
                        </Button>
             } 
                    <UpdateBtn onClick={handleOpenUpdateModal} userRole={userRole}/>
                                  </Box>
                  <UpdateBtnModal  onClose={handleCloseUpdateModal} onUpdate={onUpdate} open={openModalUpdate}  userRole={userRole} initFieldsData={initialFieldInputs} inputFields={inputFields} />
                     <DeleteBtnModal onClose={handleClose} onDelete={onDelete} open={openModal} userRole={userRole}/>
                        <Box component="p" >
                            {monster.monster_description}
                        </Box>
                        <Box sx={{my:5, p:1 ,textAlign:'center', display:"flex", flexDirection:"column", border:"1px solid #8E1616", backgroundColor:"#1E1E1E"}}>
                            
                             {monster.monster_role}
                        </Box>
                    </Box>


                    <Box component="img" sx={{width:"800px"}} src={`http://localhost:8080${monster.monster_image_url}`}>

                    </Box>
            </Box>

            </PageContainer>
        </Box>
)
}

export default MonsterDetailDesktop