import { Box } from '@mui/material';
import NewCard from './NewCard';

const NewCarouselMobile = ({ inf }) => {
  console.log("inf en NewCarouselMobile:", inf);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        
        overflowX: 'auto', 
        width: '100%',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        '& > *': {
          flex: '0 0 80%', 
          maxWidth: '350px', 
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {inf.map((notice) => (
        <NewCard
          key={notice.id_news}
          id={notice.id_news}
          imageUrl={notice.imageUrl}
          resume={notice.resume}
          title={notice.title}
          date={notice.date}
        />
      ))}
    </Box>
  );
};

export default NewCarouselMobile;
