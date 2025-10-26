import {  useMediaQuery } from '@mui/material';
import  { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MonsterDetailMobile from './MonsterDetailMobile';
import MonsterDetailDesktop from './MonsterDetailDesktop';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
const MonsterDetail = () => {
    const { id } = useParams();
    const { token, user } = useContext(AuthContext);
    const [monster, setMonster] = useState({});
    console.log("user en MonsterDetail:", user);
        const navigate =useNavigate();

    const mobile = useMediaQuery('(max-width:750px)');

    useEffect(() => {
        const fetchMonster = async () => {
            try {
                const res = await fetch(`http://localhost:8080/monsters/${id}`);
                if (!res.ok) {
                    toast.error("No se pudo encontrar el monstruo.");
                    return;
                }
                const data = await res.json();
                setMonster(data.monster);
            } catch (error) {
                toast.error("Error al cargar los detalles del monstruo.");
            }
        };
        fetchMonster();
    }, [id]);

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
          toast.error("Error al eliminar el monstruo.");
          return;
        }
        toast.success("Monstruo eliminado correctamente.");
        navigate('/monsters');


      } catch (error) {
        toast.error("Ocurrió un error inesperado al eliminar.");
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
        toast.error("Error al actualizar el monstruo.");
        return;
      }

      const data = await res.json();
      setMonster(data.updatedMonster);
      toast.success("Monstruo actualizado con éxito.");

    }
    catch (error) { 
      toast.error("Ocurrió un error inesperado al actualizar.");
    }
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

    
    return mobile ?  <MonsterDetailMobile monster={monster}  initialFieldInputs={initialFieldInputs} onUpdate={handleUpdate} inputFields={inputFields} userRole={user?.role} onDelete={handleDelete} /> : <MonsterDetailDesktop monster={monster} initialFieldInputs={initialFieldInputs} inputFields={inputFields} userRole={user?.role} onDelete={handleDelete} onUpdate={handleUpdate} />
   
}

export default MonsterDetail