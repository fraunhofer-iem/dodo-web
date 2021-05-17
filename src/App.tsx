import {
  CssBaseline,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import About from "./components/about/About";
import Content from "./components/content/Content";

import NavBar from "./components/navbar/Navbar";

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

export const aboutId = "about";
export const resultsId = "results";
export const teamId = "team";
export const partnersId = "partners";

const titleElement = {
  text: "DoDo",
  href: "#",
};

const getHrefFromId = (id: string) => "#" + id;

const navElements = [
  { text: "About", href: getHrefFromId(aboutId) },
  { text: "Results", href: getHrefFromId(resultsId) },
  { text: "Team", href: getHrefFromId(teamId) },
  { text: "Partners", href: getHrefFromId(partnersId) },
];

const contentElements = [
  { element: <About/>, id: aboutId },
  { element: <div>so much glory</div>, id: resultsId },
  { element: <div>wow</div>, id: teamId },
  { element: <div>hello</div>, id: partnersId },
];
console.log(theme.mixins.toolbar.minHeight);
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar navElements={navElements} titleElement={titleElement} />
        <Content sections={contentElements} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
