import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PageContainer from '../Layout/PageContainer/PageContainer'

import NewCardContainer from './NewCardContainer'
import SearchInput from '../SearchInput/SearchInput'
import BtnFloatingCreate from '../Buttons/BtnCreate/BtnFloatingCreate'
import { AuthContext } from '../../context/AuthContext'
import CreateBtnModal from '../Buttons/BtnCreate/CreateBtnModal'
const AllNews = () => {
  const [openModal, setOpenModal] = useState(false);
  const {user, token} = useContext(AuthContext);
  const [news, setNews] = useState([])
    const [searchValue, setSearchValue] = useState("");

  const handleClose = () => { 
    setOpenModal(false);
  }
  const handleOpen = () => {
    setOpenModal(true);
  }
  
  

  
  useEffect(() => {
      const fetchNews = () => {
        fetch("http://localhost:8080/news/")
            .then(res => res.json())
    .then(data => {
      setNews(data);
    })
    .catch(err => console.log(err));
  };
  
  fetchNews();
}, [news]);
  
  
const handleCreate =async (newNew) => { 
      try {
        const res = await fetch(`http://localhost:8080/news/`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          method: "POST",
          body: JSON.stringify(newNew)
        })

        if (!res.ok) {
          console.log("Error al eliminar la noticia");
          return;
        }


      } catch (error) {
        console.log(error)
      }
  }

      const inputFields = [
    { label: "Título", name: "title", type: "text", required: true },
    { label: "Imagen (URL)", name: "imageUrl", type: "url", required: false },
    { label: "Resumen", name: "resume", type: "text", required: true },
    { label: "Contenido", name: "content", type: "text", required: true },

    ];


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
            <BtnFloatingCreate onClick={handleOpen} user={user} />
            <CreateBtnModal onClose={handleClose} onCreate={handleCreate} open={openModal} userRole={user?.role} inputFields={inputFields}/>
            <SearchInput nameInput={"news"} placeholder={"Buscar noticia..."} onSearch={handleSearch} search={searchValue} />
      </Box>
    </PageContainer>
  </Box>

  <PageContainer>
        <NewCardContainer news={filteredNews} />
        
        
        {
          filteredNews.length === 0 && (
            <Box sx={{fontSize:"22px"}}>
              No existe la noticia con la terminacion:
              <Box sx={{fontWeight:"bold"}}>
              {searchValue}

              </Box>
            </Box>
          )
        }
        <Box>
          
        </Box>
  </PageContainer>
</Box>

  )
}

export default AllNews