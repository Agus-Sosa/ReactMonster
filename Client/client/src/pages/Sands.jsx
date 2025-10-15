import { useState, useEffect, useContext } from 'react';
import ViewUser from '../components/ViewSand/ViewUser'
import ViewAdmin from '../components/ViewSand/ViewAdmin';
import { AuthContext } from '../context/AuthContext';



const Sands = () => {

  const { user } = useContext(AuthContext);

  if (!user) return <ViewUser />;
  return (
  <div>
    {/* <ViewUser/> */}
    <ViewAdmin/>
  </div>
  )
}

export default Sands