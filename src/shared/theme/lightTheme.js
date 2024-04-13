import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    secondary: {
      light: "#FF9B3E",
      main: "#2196f3",
      dark: "#CB6200",
    },
    primary: {
      light: "#3EA2FF",
      main: "#0084FF",
      dark: "#006ACB",
    },
  },
  typography: {
      fontFamily: ["Poppins", "sans-serif"].join(", ")
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },

});

export default lightTheme;
