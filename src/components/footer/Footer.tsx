import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Copyright } from "./Copyright";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.primary.main,
      paddingTop: "4rem",
    },
  })
);

export const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.root}>
        This will be my awesome footer
        <Copyright />
      </footer>
    </React.Fragment>
  );
};
