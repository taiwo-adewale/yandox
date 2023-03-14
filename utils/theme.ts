import { Manrope } from "next/font/google";
import { red } from "@mui/material/colors";

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
      main: red.A400,
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
    h2: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
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
      main: red.A400,
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
    h2: {
      fontSize: "1.125rem",

      fontWeight: 600,
    },
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
    },
  },
};
