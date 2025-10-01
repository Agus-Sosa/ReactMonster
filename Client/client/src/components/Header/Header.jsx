import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
const Header = () => {
 const {user, handleUserLogout} = useContext(AuthContext)

  const mobile = useMediaQuery('(max-width:750px)')
  return mobile ? <HeaderMobile logoutButton={handleUserLogout} user={user}/> : <HeaderDesktop logoutButton={handleUserLogout} user={user}/>;

}

export default Header