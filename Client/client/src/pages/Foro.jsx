import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LandingForo  from '../components/Forum/Forum-landing/Forum-landing'
import ForoJoins from '../components/Forum/Forum-joins/Forum-joins'
import { useLocation } from 'react-router-dom';
import infor  from '../components/Forum/Forum-joins/info.js'

const Foro = () => {
    const location = useLocation()
    return (
        <>
        <Header/>
        <LandingForo/>
        <ForoJoins info={location} data={infor}/>
        <Footer/>
        </>
)
}

export default Foro