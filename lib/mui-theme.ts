import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#4A7C59", dark: "#2D4F38" },
    background: { default: "#FAFAFA", paper: "#FFFFFF" },
    text: { primary: "#222222", secondary: "#666666" },
  },
  typography: {
    fontFamily:
      '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  shape: { borderRadius: 12 },
});
