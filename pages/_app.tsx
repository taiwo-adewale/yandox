import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "utils/createEmotionCache";
import { SwitchTheme } from "components";
import { darkTheme, lightTheme } from "utils/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const theme = React.useMemo(
    // @ts-ignore
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  theme.typography.body1 = {
    fontSize: "0.75rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.875rem",
    },
    color: mode === "light" ? "#11142D" : "#EFEFEF",
  };
  theme.typography.body2 = {
    fontSize: "0.75rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.875rem",
    },
    color: mode === "light" ? "#808191" : "#6F767E",
  };

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
