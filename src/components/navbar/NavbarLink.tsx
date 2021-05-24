import React, { PropsWithChildren } from "react";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from '@material-ui/styles';
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import { HashLink as RouterLink } from "react-router-hash-link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      "&:hover": {
        color: theme.palette.secondary.main,
        textDecoration: "none",
      },
      color: "#fff",
    },
    titleLink: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    linkActive: {
      borderRadius: "0.5rem",
      paddingTop: "0.75rem",
      paddingLeft: "0.5rem",
      paddingRight: "1rem",
      paddingBottom: "0.75rem",
      background: theme.palette.secondary.main,
      color: "#fff",
    },
  })
);

interface LinkProps {
  href: string;
  active: boolean;
}

export const TitleLink = (props: PropsWithChildren<LinkProps>) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" color="textPrimary">
      <Link
        color="textPrimary"
        to="/home#top"
        component={RouterLink}
        className={classes.titleLink}
      >
         {props.children}
      </Link>
    </Typography>
  );
};

const NavbarLink: React.FC<LinkProps> = (props) => {
  const classes = useStyles();

  return (
    <Link
      to={props.href}
      component={RouterLink}
      className={props.active ? classes.linkActive : classes.link}
    >
       {props.children}
    </Link>
  );
};
export default NavbarLink;
