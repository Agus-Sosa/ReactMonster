import { Box } from '@mui/material';
import { useState } from 'react'
import { useEffect } from 'react'
import MonstersCard from './MonstersCards';

const MonsterContainer = () => {
const [monster, setMonster]= useState([]);
    useEffect(()=> {
        fetch("http://localhost:8080/monsters/")
        .then(res=> res.json())
        .then((data)=> setMonster(data.monsters))
        .catch(error => console.log(error))
    }, [])
    

  return (
    <Box sx={{display:"flex", flexWrap:"wrap", gap:2, justifyContent:"center", my:7}}>
        {monster.map((monster)=> (
            <MonstersCard id={monster.monster_id} description={monster.monster_description}
                image={`http://localhost:8080${monster.monster_image_url}`}
                name={monster.monster_name} role={monster.monster_role} key={monster.monster_id} />
        ))}
    </Box>
)
}

export default MonsterContainer