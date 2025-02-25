import { createTheme } from "@mui/material";

export const IH_ORANGE = "#ee7900";

export const COMPLEMENTARY = "#0075EE";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333333",
      paper: "#424242",
    },
    primary: {
      main: "#f0f0f0",
    },
  },
});

export default theme;
