import React,{ useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LandingForo  from '../components/Forum/Forum-landing/Forum-landing'
import ForoJoins from '../components/Forum/Forum-joins/Forum-joins'
import { useLocation } from 'react-router-dom';
import infor  from '../components/Forum/Forum-joins/info.js'
import publi  from '../components/Forum/Forum-joins/post.js'

const Foro = () => {
    const location = useLocation()
    const [informacion, setInformacion] = useState(infor)
    const [publicaciones, setPublicaciones] = useState(publi)


    return (
        <>
        <LandingForo/>
        <ForoJoins info={location} data={informacion}/>
        <Footer/>
        </>
)
}

export default Foro