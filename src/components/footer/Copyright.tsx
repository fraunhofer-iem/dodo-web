import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.primary.dark,
      paddingBottom: "1rem",
      paddingTop: "1rem",
      color: "#fff",
    },
  })
);

export const Copyright = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>Copyright © by Fraunhofer-Gesellschaft</div>
  );
};
