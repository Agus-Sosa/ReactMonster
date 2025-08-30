import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import useMediaQuery from '@mui/material/useMediaQuery';
const Header = () => {
  const mobile = useMediaQuery('(max-width:750px)')
  return mobile ? <HeaderMobile/> : <HeaderDesktop/>;

}

export default Header