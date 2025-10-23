import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const NewCard = ({ id, title, resume, imageUrl, date }) => {
  // ✅ Ajuste: eliminamos la barra extra
  // y aseguramos compatibilidad con URLs absolutas o relativas
  const imageSrc = `http://localhost:8080${imageUrl}`
;

  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageSrc}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          {new Date(date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2">{resume}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewCard;
