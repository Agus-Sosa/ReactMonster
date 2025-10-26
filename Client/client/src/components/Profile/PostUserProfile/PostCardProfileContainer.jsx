import { Box } from '@mui/material'
import React, { useState } from 'react'
import PostCardProfile from './PostCardProfile'
import ModalPostProfile from './ModalPostProfile';

function PostCardProfileContainer({ info, }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {
            info?.map((post) => (
                <PostCardProfile key={post.id_post} date={post.createdAt} id_post={post.id_post} title={post.title} resume={post.resume} onClick={() => handleOpenModal(post)} />
            ))
          }
      </Box>
      <ModalPostProfile post={selectedPost} open={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default PostCardProfileContainer