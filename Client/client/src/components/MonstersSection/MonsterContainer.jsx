import { Box } from '@mui/material';
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import MonstersCard from './MonstersCards';

const MonsterContainer = () => {
const [monster, setMonster]= useState([]);
    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const res = await fetch("http://localhost:8080/monsters/");
                if (!res.ok) {
                    toast.error("No se pudieron cargar los monstruos.");
                    return;
                }
                const data = await res.json();
                setMonster(data.monsters);
            } catch (error) { toast.error("Error al conectar con el servidor."); }
        }
        fetchMonsters();
    }, [])
    
console.log("monsters:", monster)
  return (
    <Box sx={{display:"flex", flexWrap:"wrap", gap:2, justifyContent:"center", my:7}}>
        {monster.filter(m=> m && m.monster_id).map((monster)=> ( //Dia 8000 buscando el problema del monster undefined
            <MonstersCard id={monster.monster_id} description={monster.monster_description}
                image={`http://localhost:8080${monster.monster_image_url}`}
                name={monster.monster_name} role={monster.monster_role} key={monster.monster_id} />
        ))}
    </Box>
)
}

export default MonsterContainer