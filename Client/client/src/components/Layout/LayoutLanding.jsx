import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer";

const LayoutLanding = () => {
  return (
    <Box>
        <Header/>
      <Box
        sx={{
          margin: "0 auto",      
        }}
      >
        <Outlet />
      </Box>

    <Footer/>
    </Box>
  );
};

export default LayoutLanding;
