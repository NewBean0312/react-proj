import React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";
import { RecoilRoot } from "recoil";

export default function Root() {
  const theme = createTheme({
    typography: {
      fontFamily: ["GmarketSansMedium"],
    },
    palette: {
      primary: {
        main: "#4a4a4a",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <App theme={theme} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}