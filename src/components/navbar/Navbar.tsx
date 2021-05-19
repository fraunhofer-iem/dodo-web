import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import NavbarLink, { TitleLink } from "./NavbarLink";
import { Typography, Toolbar, AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    navRoot: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  })
);

interface Props {
  titleElement: NavElement;
  navElements: Array<NavElement>;
}

interface NavElement {
  text: string;
  href: string;
}
const NavBar: React.FC<Props> = (props) => {
  const classes = useStyles();
  // ToDo: read this from mobx state
  const [activeLink] = useState("");

  const navElementToLink = (ele: NavElement) => {
    return (
      <NavbarLink
        key={"key_" + ele.href}
        active={activeLink === ele.href}
        href={ele.href}
      >
        {ele.text}
      </NavbarLink>
    );
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.navRoot}>
          <TitleLink active={false} href={props.titleElement.href}>
            {props.titleElement.text}
          </TitleLink>

          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.linkSpacing}
          >
            {props.navElements.map(navElementToLink)}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
