import { Box } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Box
  sx={{
    width: "100%", // 👈 que siempre ocupe todo el ancho
    maxWidth: { md: "1500px" }, // 👈 solo limitar en pantallas grandes
    margin: "0 auto",
  }}
>
  {children}
</Box>

  );
};

export default PageContainer;