import React from 'react'
import NewCard from './NewCard'
import { Box } from '@mui/material'

const NewCardContainer = ({news}) => {
  return (

            <Box sx={{display:"flex", flexWrap:"wrap", gap:2, justifyContent:{xs: "center",md:"space-between"}, my:7}}>
                {
                news.map((newItem)=> (
                    <NewCard date={newItem.date} id={newItem.id_news} imageUrl={newItem.imageUrl} resume={newItem.resume} title={newItem.title} key={newItem.id_news} />
                ))
                
            }
            </Box>
)
}

export default NewCardContainer