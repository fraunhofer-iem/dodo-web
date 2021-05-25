import React, { PropsWithChildren } from "react";

import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import { HashLink as RouterLink } from "react-router-hash-link";

const linkActive = {
  borderRadius: "0.5rem",
  marginLeft: 2,
  paddingTop: "0.75rem",
  paddingLeft: "0.5rem",
  paddingRight: "1rem",
  paddingBottom: "0.75rem",
  backgroundColor: "secondary.main",
  color: "#fff",
};

const link = {
  ":hover": {
    color: "secondary.main",
    textDecoration: "none",
  },
  marginLeft: 2,
  color: "#fff",
};

interface LinkProps {
  href: string;
  active: boolean;
}

export const TitleLink = (props: PropsWithChildren<LinkProps>) => {
  return (
    <Typography variant="h4" color="textPrimary">
      <Link
        color="textPrimary"
        to="/home#top"
        component={RouterLink}
        sx={{
          ":hover": {
            textDecoration: "none",
          },
        }}
      >
         {props.children}
      </Link>
    </Typography>
  );
};

const NavbarLink: React.FC<LinkProps> = (props) => {
  return (
    <Link
      to={props.href}
      component={RouterLink}
      sx={props.active ? linkActive : link}
    >
       {props.children}
    </Link>
  );
};
export default NavbarLink;
