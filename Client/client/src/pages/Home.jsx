import React from 'react'
import Footer from '../components/Footer'
import Landing from '../components/Landing/Landing'
import News from '../components/News/News'
import Header from '../components/Header/Header'
import ArenaSection from '../components/AboutGame/ArenaSection'
import MonstersSection from '../components/AboutGame/MonstersSection'

const Home = () => {
  return (
    <>
    <Header/>
    <Landing/>
    <News/>
    <MonstersSection/>
    <ArenaSection/>
    <Footer/>
    </>
)
}

export default Home