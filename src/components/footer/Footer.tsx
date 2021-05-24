import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from '@material-ui/styles';
import React from "react";
import { ContactFooter } from "./ContactFooter";
import { Copyright } from "./Copyright";

import { SocialFooter } from "./SocialFooter";

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
    contentWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    content: {
      marginLeft: "4rem",
      marginRight: "4rem",
      marginBottom: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
  })
);

export const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.root}>
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <ContactFooter />
          </div>
          <div className={classes.content}>
            <SocialFooter />
          </div>
        </div>
        <Copyright />
      </footer>
    </React.Fragment>
  );
};
