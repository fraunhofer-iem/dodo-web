import {
  CssBaseline,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import About from "./components/about/About";
import Content from "./components/content/Content";
import { Footer } from "./components/footer/Footer";

import NavBar from "./components/navbar/Navbar";
import Title from "./components/title/Title";

const theme = responsiveFontSizes(
  createMuiTheme({
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
  })
);

export const titleId = "title";
export const aboutId = "about";
export const resultsId = "results";
export const teamId = "team";
export const partnersId = "partners";

const titleElement = {
  text: "DoDo",
  href: "#title",
};

const getHrefFromId = (id: string) => "#" + id;

const navElements = [{ text: "About", href: getHrefFromId(aboutId) }];

const contentElements = [
  { element: <Title />, id: titleId },
  { element: <About />, id: aboutId },
];
console.log(theme.mixins.toolbar.minHeight);
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar navElements={navElements} titleElement={titleElement} />
        <Content sections={contentElements} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
