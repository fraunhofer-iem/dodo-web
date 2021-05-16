import CssBaseline from "@material-ui/core/CssBaseline";
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
  {element: (<div></div>), id: aboutId},
  {element: (<div></div>), id: resultsId},
  {element: (<div></div>), id: teamId},
  {element: (<div></div>), id: partnersId},
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar navElements={navElements} titleElement={titleElement} />
        <Content />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
