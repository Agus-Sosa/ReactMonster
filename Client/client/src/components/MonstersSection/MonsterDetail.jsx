import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';
import hero_detail_monster from '../../assets/img/monsters/hero_detail_monster.png'
const MonsterDetail = () => {
    const {id} = useParams();
    const [monster, setMonster]= useState({});

    useEffect(()=> {
        fetch(`http://localhost:8080/monsters/${id}`)
        .then(res=> res.json())
        .then((data)=> setMonster(data.monster))
        .catch(error => console.log(error))
    },[id])
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
                        <Box component="h1" sx={{fontSize:{xs:"50px", md:"70px"}, color:'white', fontStyle:"italic"}}>{monster.monster_name}</Box>
                        <Box component="p" >
                            {monster.monster_description}
                        </Box>
                        <Box sx={{my:5, p:4 ,textAlign:'center', display:"flex", flexDirection:"column", border:"1px solid #8E1616", backgroundColor:"#1E1E1E"}}>
                            
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

export default MonsterDetail