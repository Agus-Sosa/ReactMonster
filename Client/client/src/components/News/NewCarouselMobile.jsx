import { Box } from '@mui/material'
import NewCard from './NewCard'

const NewCarouselMobile = ({inf}) => {
  return (
<Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: '100%',
        maxWidth:"400",
        scrollSnapType: 'x mandatory',
        '& > *': {
          flex: '0 0 auto',
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {inf.map((item) => (
       <NewCard key={item.id} inf={item}/>
      ))}
    </Box>  )
}

export default NewCarouselMobile