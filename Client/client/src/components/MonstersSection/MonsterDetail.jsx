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
    

    
    
    return mobile ?  <MonsterDetailMobile monster={monster} userRole={user.role} onDelete={handleDelete} /> : <MonsterDetailDesktop monster={monster} userRole={user.role} onDelete={handleDelete} />
   
}

export default MonsterDetail