import { Input } from '@mui/material'
import React from 'react'

const SearchInput = ({onSearch, search, nameInput, placeholder}) => {
     const handleNewSearch =(e)=> {
    onSearch(e.target.value);
    }
    
    
          const style_input = {
        p:1,
        outline: "none",
        backgroundColor:"#2b2b2bff",
        color:"white",
        fontSize:"16px",    
        borderRadius:"4px",
        border:"0.5px solid gray"
    }
  return (
      <Input component="input" name={nameInput} value={search} placeholder={placeholder} sx={ style_input }   onChange={handleNewSearch}/>
  )
}

export default SearchInput