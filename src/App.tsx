import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { Footer } from "./components/footer/Footer";

import NavBar from "./components/navbar/Navbar";
import Partners from "./components/partners/Partners";
import Title from "./components/title/Title";
import { Route, Switch } from "react-router-dom";
import Impressum from "./components/impressum/Impressum";
import DataProtection from "./components/impressum/DataProtection";
import Concepts from "./components/concepts/Concepts";
import  CssBaseline from '@material-ui/core/CssBaseline';


const theme = responsiveFontSizes(
  createTheme({
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
  })
);

export const titleId = "title";
export const aboutId = "about";
export const conceptsId = "concepts";
export const teamId = "team";
export const partnersId = "partners";

const titleElement = {
  text: "DoDo",
  href: "title",
};

const getHrefFromId = (id: string) => "#" + id;

const navElements = [
  { text: "About", href: getHrefFromId(aboutId) },
  { text: "Partners", href: getHrefFromId(partnersId) },
];

const contentElements = [
  { element: <Title />, id: titleId },
  { element: <About />, id: aboutId },
  { element: <Concepts />, id: conceptsId },
  { element: <Partners />, id: partnersId },
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar navElements={navElements} titleElement={titleElement} />
        <Switch>
          <Route path="/impressum">
            <Impressum />
            <DataProtection />
          </Route>
          <Route path="/">
            <Home sections={contentElements} />
          </Route>
        </Switch>

        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
