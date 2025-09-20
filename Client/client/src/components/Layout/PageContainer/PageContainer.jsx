import { Box } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1500px", 
        margin: "0 auto", 
        padding: { xs: "0 16px", md: "0 14px" }, // Padding adaptable
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;