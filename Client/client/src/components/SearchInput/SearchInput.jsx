import { Box, Input } from '@mui/material'
import React from 'react'

const SearchInput = ({onSearch, search, nameInput, placeholder}) => {
     const handleNewSearch =(e)=> {
    onSearch(e.target.value);
    }
    
    
          const style_input = {
      
          
    }
  return (
    <Box component="input"
      
      name={nameInput} value={search} placeholder={placeholder} sx={{
          p:1,
        outline: "none",
        backgroundColor:"#2b2b2bff",
        color:"white",
        fontSize:"16px",    
        borderRadius:"10px",
        
      }} onChange={handleNewSearch} />
  )
}

export default SearchInput