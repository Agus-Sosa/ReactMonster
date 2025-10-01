import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';

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
        <Box sx={{minHeight:"100vh"}}>
            <PageContainer>
                    <Box sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "start", 
            minHeight: "100vh", 
            color:"white",
            width:"50%"
                    }}
                    >
                        <Box component="h1" sx={{fontSize:{xs:"50px", md:"70px"}, color:'white', fontStyle:"italic"}}>{monster.monster_name}</Box>
                        <Box component="p" >
                            {monster.monster_description}
                        </Box>
                    </Box>
                    <Box component="img" src={monster.monster_image_url}>

                    </Box>
            </PageContainer>
        </Box>
)
}

export default MonsterDetail