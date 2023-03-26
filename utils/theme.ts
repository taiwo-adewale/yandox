import { Manrope } from "next/font/google";

// declare module "@mui/material/styles" {
//   interface Palette {
//     textPrimary: customColor;
//     altPrimary: customColor;
//     textSecondary: customColor;
//     cardBg: string;
//   }
//   interface PaletteOptions {
//     textPrimary?: customColor;
//     altPrimary?: customColor;
//     textSecondary?: customColor;
//     cardBg?: string;
//   }
// }

export const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: "#F4F4F4",
    },
    primary: {
      main: "#475BE8",
    },
    secondary: {
      main: "#F7F7F7",
    },
    error: {
      main: "#EB5757",
    },
    success: {
      main: "#2ED480",
    },
    textPrimary: {
      main: "#11142D",
    },
    altPrimary: {
      main: "#E4E8EF",
    },
    textSecondary: {
      main: "#808191",
    },
    cardBg: "#FCFCFC",
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 548,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 2000,
    },
  },
};

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: "#111315",
    },
    primary: {
      main: "#475BE8",
    },
    secondary: {
      main: "#111315",
    },
    error: {
      main: "#EB5757",
    },
    success: {
      main: "#2ED480",
    },
    textPrimary: {
      main: "#EFEFEF",
    },
    altPrimary: {
      main: "#272B30",
    },
    textSecondary: {
      main: "#6F767E",
    },
    cardBg: "#1A1D1F",
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 548,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 2000,
    },
  },
};
