import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavbarLink from "./NavBarLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      borderBottom: "solid",
      borderBottomColor: "#e0e0e0",
      borderBottomWidth: "1px",
    },
    flex: {
      flexGrow: 1,
    },
    linkSpacing: {
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    appBar: {
      boxShadow: "none",
      backgroundColor: theme.palette.primary.main,
    },
  })
);
// link style
// .rounded {
//   border-radius: 0.5rem !important;
// }
// .px-0 {
//   padding-right: 0 !important;
// }
// .px-0 {
//   padding-left: 0 !important;
// }
// .py-3 {
//   padding-top: 1rem !important;
// }
// .py-3 {
//   padding-bottom: 1rem !important;
// }
// .px-lg-3 {
//   padding-right: 1rem !important;
// }
// .navbar-brand {
//   display: inline-block;
//   padding-top: 0.3125rem;
//   padding-bottom: 0.3125rem;
//   margin-right: 1rem;
//   font-size: 1.25rem;
//   line-height: inherit;
//   white-space: nowrap;
// }
// .navbar-brand:hover, .navbar-brand:focus {
//   text-decoration: none;
// }

// @media (max-width: 991.98px) {
//   .navbar-expand-lg > .container,
// .navbar-expand-lg > .container-fluid,
// .navbar-expand-lg > .container-sm,
// .navbar-expand-lg > .container-md,
// .navbar-expand-lg > .container-lg,
// .navbar-expand-lg > .container-xl {
//     padding-right: 0;
//     padding-left: 0;
//   }
// }
// @media (min-width: 992px) {
//   .navbar-expand-lg {
//     flex-flow: row nowrap;
//     justify-content: flex-start;
//   }
//   .navbar-expand-lg .navbar-nav {
//     flex-direction: row;
//   }
//   .navbar-expand-lg .navbar-nav .dropdown-menu {
//     position: absolute;
//   }
//   .navbar-expand-lg .navbar-nav .nav-link {
//     padding-right: 0.5rem;
//     padding-left: 0.5rem;
//   }
//   .navbar-expand-lg > .container,
// .navbar-expand-lg > .container-fluid,
// .navbar-expand-lg > .container-sm,
// .navbar-expand-lg > .container-md,
// .navbar-expand-lg > .container-lg,
// .navbar-expand-lg > .container-xl {
//     flex-wrap: nowrap;
//   }
//   .navbar-expand-lg .navbar-nav-scroll {
//     overflow: visible;
//   }
//   .navbar-expand-lg .navbar-collapse {
//     display: flex !important;
//     flex-basis: auto;
//   }
//   .navbar-expand-lg .navbar-toggler {
//     display: none;
//   }
// }

// .navbar {
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0.5rem 1rem;
// }
// .navbar .container,
// .navbar .container-fluid,
// .navbar .container-sm,
// .navbar .container-md,
// .navbar .container-lg,
// .navbar .container-xl {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;
// }

export const topSection = "#";
export const aboutSection = "#about";
export const resultsSection = "#results";
export const teamSection = "#team";
export const partnersSection = "#partners";

const NavBar = () => {
  const classes = useStyles();
  // ToDo: read this from mobx state
  const [activeLink, setActiveLink] = useState("#about");

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.linkSpacing}
          >
            <NavbarLink active={false} href={topSection}>
              DoDo
            </NavbarLink>
            <NavbarLink
              active={activeLink === aboutSection}
              href={aboutSection}
            >
              About
            </NavbarLink>
            <NavbarLink
              active={activeLink === resultsSection}
              href={resultsSection}
            >
              Results
            </NavbarLink>
            <NavbarLink active={activeLink === teamSection} href={teamSection}>
              Team
            </NavbarLink>
            <NavbarLink
              active={activeLink === partnersSection}
              href={partnersSection}
            >
              Partners
            </NavbarLink>
            <Button variant="contained">Tool Preview</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
