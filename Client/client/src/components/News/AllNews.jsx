import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PageContainer from '../Layout/PageContainer/PageContainer'
import news_title from '../../assets/img/news_title.png'
import hero_bg_home from '../../assets/img/hero_bg_home.png'
import NewCard from './NewCard'
const AllNews = () => {
    const [news, setNews]= useState([])
    useEffect(()=> {
        fetch("http://localhost:8080/news/")
        .then(res=> res.json())
        .then(data=> setNews(data))
        .catch(err=> console.log(err))

    }, [])

  return (
    <Box>
        <Box  sx={{width:"100%", display:"flex", alignItems:"center" ,height:{xs:"40vh", md:"60vh", background: `url(${hero_bg_home})`, backgroundSize:"cover",}}}>
      <PageContainer>
      <Box component='img' src={news_title} sx={{width:{ xs: "300px", md:"500px"}}} ></Box>

      </PageContainer >
    </Box > 
    <Box sx={{backgroundColor:"#E3E0C3", minHeight:"100vh", width:"100%", paddingY:5}}>

        <PageContainer >
            <Box sx={{display:"flex", flexWrap:"wrap", gap:2, justifyContent:"center", my:7}}>
                {
                news.map((newItem)=> (
                    <NewCard date={newItem.date} id={newItem.id_news} imageUrl={newItem.imageUrl} resume={newItem.resume} title={newItem.title} key={newItem.id_news} />
                ))
                
            }
            </Box>
           
        </PageContainer>
            </Box>

    </Box>
  )
}

export default AllNews