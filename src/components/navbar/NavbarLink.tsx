import React, { PropsWithChildren } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      "&:hover": {
        color: theme.palette.secondary.main,
      },
      color: "#fff",
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

export const TitleLink = (props: PropsWithChildren<{}>) => {
  return (
    <Typography variant="h4" color="textPrimary">
      <Link color="textPrimary" href={"#"} underline="none">
         {props.children}
      </Link>
    </Typography>
  );
};

const NavbarLink: React.FC<LinkProps> = (props) => {
  const classes = useStyles();

  return (
    <Link
      href={props.href}
      underline="none"
      className={props.active ? classes.linkActive : classes.link}
    >
       {props.children}
    </Link>
  );
};
export default NavbarLink;
