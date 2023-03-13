import * as React from "react";
import Head from "next/head";
import { Manrope } from "next/font/google";
import { AppProps } from "next/app";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "utils/createEmotionCache";
import { SwitchTheme } from "components";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material/styles" {
  interface Palette {
    textPrimary: customColor;
    textSecondary: customColor;
    cardBg: string;
  }
  interface PaletteOptions {
    textPrimary?: customColor;
    textSecondary?: customColor;
    cardBg?: string;
  }
}

export default function MyApp(props: MyAppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "light" ? "#F4F4F4" : "#111315",
          },
          primary: {
            main: "#475BE8",
          },
          secondary: {
            main: "#DADEFA",
          },
          error: {
            main: red.A400,
          },
          textPrimary: {
            main: "#11142D",
          },
          textSecondary: {
            main: mode === "light" ? "#808191" : "#6F767E",
          },
          cardBg: mode === "light" ? "#FCFCFC" : "#1A1D1F",
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
          body1: {
            fontSize: "0.875rem",
            color: mode === "light" ? "#11142D" : "#EFEFEF",
            fontWeight: 500,
          },
          body2: {
            fontSize: "0.875rem",
            color: mode === "light" ? "#808191" : "#6F767E",
            fontWeight: 400,
          },
        },
      }),
    [mode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SwitchTheme mode={mode} setMode={setMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
