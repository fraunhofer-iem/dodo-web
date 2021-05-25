import React, { useState } from "react";
import NavbarLink, { TitleLink } from "./NavbarLink";
import { Typography, Toolbar, AppBar } from "@material-ui/core";

interface Props {
  titleElement: NavElement;
  navElements: Array<NavElement>;
}

interface NavElement {
  text: string;
  href: string;
}
const NavBar: React.FC<Props> = (props) => {
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
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TitleLink active={false} href={props.titleElement.href}>
          {props.titleElement.text}
        </TitleLink>

        <Typography
          variant="h6"
          color="textPrimary"
        >
          {props.navElements.map(navElementToLink)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
