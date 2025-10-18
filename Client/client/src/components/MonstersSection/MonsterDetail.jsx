import { Box, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../Layout/PageContainer/PageContainer';
import hero_detail_monster from '../../assets/img/monsters/hero_detail_monster.png'
import MonsterDetailMobile from './MonsterDetailMobile';
import MonsterDetailDesktop from './MonsterDetailDesktop';
const MonsterDetail = () => {
    const {id} = useParams();
    const [monster, setMonster] = useState({});
    const mobile = useMediaQuery('(max-width:750px)');

    useEffect(()=> {
        fetch(`http://localhost:8080/monsters/${id}`)
        .then(res=> res.json())
        .then((data)=> setMonster(data.monster))
        .catch(error => console.log(error))
    }, [id])
    
    return mobile ?  <MonsterDetailMobile monster={monster} /> : <MonsterDetailDesktop monster={monster} />
   
}

export default MonsterDetail