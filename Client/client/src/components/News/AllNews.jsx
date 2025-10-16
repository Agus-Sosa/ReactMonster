import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PageContainer from '../Layout/PageContainer/PageContainer'
import news_title from '../../assets/img/news_title.png'
import hero_bg_home from '../../assets/img/hero_bg_home.png'
import NewCard from './NewCard'
import CreateNewPost from './CreateNewPost'
import NewCardContainer from './NewCardContainer'
import SearchInput from '../SearchInput/SearchInput'
const AllNews = () => {
  const [news, setNews] = useState([])
    const [searchValue, setSearchValue] = useState("");

    const fetchNews = () => {
  fetch("http://localhost:8080/news/")
    .then(res => res.json())
    .then(data => setNews(data))
    .catch(err => console.log(err));
};

useEffect(() => {
  fetchNews();
}, [news]);
  
    const handleSearch =(newSearchValue)=> {
    setSearchValue(newSearchValue);
  }

  const filteredNews = news.filter((n)=> {
    if(!searchValue) return news
    const lowerCaseSearch = searchValue.toLowerCase();

    return (
      n.title.toLowerCase().includes(lowerCaseSearch) ||
      n.resume.toLowerCase().includes(lowerCaseSearch)
    )
  })

  return (
    <Box sx={{backgroundColor:"#E3E0C3", minHeight:"100vh", width:"100%", py:5}}>
  <Box sx={{position:"sticky", top:0, zIndex:10, backgroundColor:"#E3E0C3"}}>
    <PageContainer>
      <Box sx={{display:'flex', flexDirection:{xs:"column",md:"row"}, justifyContent:{xs:"start ",md:"space-between"}}}>
        <CreateNewPost refreshNews={fetchNews} />
        <SearchInput nameInput={"news"} placeholder={"Buscar noticia..."} onSearch={handleSearch} search={searchValue}/>
      </Box>
    </PageContainer>
  </Box>

  <PageContainer>
    <NewCardContainer news={filteredNews}/>
  </PageContainer>
</Box>

  )
}

export default AllNews