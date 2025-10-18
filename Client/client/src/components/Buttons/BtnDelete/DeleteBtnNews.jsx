import React from 'react'

const DeleteBtnNews = ({ onDelete, userRole }) => {

    if (userRole !== 'admin' || userRole !== 'editor') return null;
  return (
      <>
      </>
  )
}

export default DeleteBtnNews