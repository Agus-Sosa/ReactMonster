import { Box } from '@mui/material'
import React from 'react'
import PostCardProfile from './PostCardProfile'

function PostCardProfileContainer({ info, }) {
    console.log("info:" , info)
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {
            info?.map((post) => (
                <PostCardProfile key={post.id_post} date={info.date} id_post={post.id_post} title={post.title} resume={post.resume} />
            ))
          }
    </Box>
)
}

export default PostCardProfileContainer