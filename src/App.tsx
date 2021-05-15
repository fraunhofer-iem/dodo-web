import { orange } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useRef, useState } from "react";

import NavBar from "./components/navbar/Navbar";
import Overview from "./components/overview/Overview";
import Section from "./components/section/Section";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

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
  status: {
    danger: orange[500],
  },
});

function App() {
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    console.log("intersection detected");
    console.log(entries);
    // entries[0].target.getAttribute(href)
  };

  const setRef = (el: HTMLElement | null) => {
    if (el !== null && observer !== undefined) {
      observer.observe(el);
    }
  };

  const root = React.createRef<HTMLDivElement>();
  const options = {
    root: root.current,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const observer = new IntersectionObserver(callback, options);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div ref={root}>
          <Section href={"about"} setRef={setRef} title={"Hello World"}></Section>
          <Section href={"results"}  setRef={setRef} title={"Next"}></Section>
          <Section href={"team"} setRef={setRef} title={"WhoopWhoop"}></Section>
          <Section href={"partners"} setRef={setRef} title={"WhoopWhoop"}></Section>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
