import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import { useLocation } from 'react-router-dom';


const Monsters = () => {
    const location = useLocation()
    return (
    <>
    <Header/>
    <Footer/>
    </>
)
}

export default Monsters