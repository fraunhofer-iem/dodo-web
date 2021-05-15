import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import Content from "./components/content/Content";

import NavBar from "./components/navbar/Navbar";


const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#2c3e50",
    },
    primary: {
      main: "#2c3e50",
    },
    secondary: {
      main: "#1abc9c",
    },
  },
  typography: {},
});

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Content />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
