import { Box, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';
import MonsterDetailMobile from './MonsterDetailMobile';
import MonsterDetailDesktop from './MonsterDetailDesktop';
import { AuthContext } from '../../context/AuthContext';
const MonsterDetail = () => {
    const { id } = useParams();
    const { token, user } = useContext(AuthContext);
    const [monster, setMonster] = useState({});
    console.log("user en MonsterDetail:", user);
        const navigate =useNavigate();

    const mobile = useMediaQuery('(max-width:750px)');

    useEffect(()=> {
        fetch(`http://localhost:8080/monsters/${id}`)
        .then(res=> res.json())
        .then((data)=> setMonster(data.monster))
        .catch(error => console.log(error))
    }, [id])

const handleDelete =async () => { 
      try {
        const res = await fetch(`http://localhost:8080/monsters/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          method: "DELETE",
        })

        if (!res.ok) {
          console.log("Error al eliminar la noticia");
          return;
        }
        navigate('/monsters');


      } catch (error) {
        console.log(error)
      }
    }
    
 const handleUpdate = async(updatedNew) => { 
    try { 

      const res = await fetch(`http://localhost:8080/monsters/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        ,
        method: "PUT",
        body: JSON.stringify(updatedNew)
      })
      


      if (!res.ok) { 
        console.log("Error al actualizar la noticia");
        return;
      }

      const data = await res.json();
      setNewDetail(data.updatedMonster);

    }
    catch (error) { }
  }
      const inputFields = [
  { name: "monster_role", label: "Rol del monstruo", type: "text" },
  { name: "monster_name", label: "Nombre del monstruo", type: "text" },
  { name: "monster_description", label: "Descripción", type: "text" },
  { name: "monster_image_url", label: "URL de imagen (tarjeta)", type: "text" },
];

    
  const initialFieldInputs = {
    monster_role: monster.monster_role || '',
    monster_name: monster.monster_name || '',
    monster_description: monster.monster_description || '',
    monster_image_url: monster.monster_image_url || '',

  }

    
    return mobile ?  <MonsterDetailMobile monster={monster}  initialFieldInputs={initialFieldInputs} inputFields={inputFields} userRole={user?.role} onDelete={handleDelete} /> : <MonsterDetailDesktop monster={monster} initialFieldInputs={initialFieldInputs} inputFields={inputFields} userRole={user?.role} onDelete={handleDelete} />
   
}

export default MonsterDetail