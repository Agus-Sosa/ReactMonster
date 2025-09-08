import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import MonstersLanding from '../components/MonstersCards/MonstersLanding';
import MonstersCards from '../components/MonstersCards/MonstersCards';  
import { useLocation } from 'react-router-dom';

const Monsters = () => {
    const location = useLocation()
    return (
    <>
    <Header/>
    <MonstersLanding/>
    <MonstersCards/>
    <Footer/>
    </>
)
}

export default Monsters