import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LandingForo  from '../components/Forum/Forum-landing/Forum-landing'
import ForoJoins from '../components/Forum/Forum-joins/Forum-joins'
import { useLocation } from 'react-router-dom';

const Foro = () => {
    const location = useLocation()
    return (
        <>
        <Header/>
        <LandingForo/>
        <ForoJoins info={location}/>
        <Footer/>
        </>
)
}

export default Foro