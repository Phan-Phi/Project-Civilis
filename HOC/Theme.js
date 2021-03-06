import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { red, green } from "@mui/material/colors";

const defaultTheme = createTheme({
  fontName: {
    aguda: "Aguda",
    bellico: "Bellico",
  },
  palette: {
    primary: {
      main: "#2d72b4",
      light: "#5cc666",
      dark: "linear-gradient(90deg, rgba(185,234,94,1) 5%, rgba(92,198,102,1) 29%, rgba(0,240,233,1) 62%, rgba(0,152,255,1) 100%)",
    },
    secondary: {
      main: "#1074BA",
      light: "#5BA2ED",
      dark: "#00498A",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      main: "#B41100",
      light: red[50],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    common: {
      black: "#2B2B2B",
      white: "#FFFFFF",
      natural1: "#2B2B2B",
      natural2: "#777E91",
      natural3: "#B1B5C4",
      natural4: "#E6E8EC",
      natural5: "#F4F5F6",
      natural6: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      "Myriad Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "64px",
      lineHeight: "64px",
      fontWeight: 700,
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: "48px",
      lineHeight: "56px",
      fontWeight: 700,
      letterSpacing: "-2%",
    },
    h3: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 700,
      letterSpacing: "-1%",
    },
    h4: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 700,
      letterSpacing: "-1%",
    },

    title: {
      fontSize: "13px",
      lineHeight: "25px",
      fontWeight: 700,
      letterSpacing: "-1%",
    },

    body1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 400,
      letterSpacing: "-1%",
    },

    body1_bold: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 600,
    },
    body3: {
      fontSize: "17px",
      lineHeight: "24px",
      fontWeight: 400,
    },

    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },

    body2_bold: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    caption1: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    caption1_bold: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    caption2: {
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption2_bold: {
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: 600,
    },
    hairline1: {
      fontSize: "16px",
      lineHeight: "16px",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    hairline2: {
      fontSize: "12px",
      lineHeight: "12px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    button1: {
      fontSize: "16px",
      lineHeight: "16px",
      fontWeight: 400,
    },
    button2: {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: 700,
    },
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body2",
        color: defaultTheme.palette.common.natural1,
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {},
      },
    },
  },
});

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
