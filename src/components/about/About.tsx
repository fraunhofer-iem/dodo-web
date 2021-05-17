import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

import { PossibleColors, StarDivider } from "../starDivider/CustomDivider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: "22rem",
      marginLeft: "2rem",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "5rem",
      paddingTop: "4rem",
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  })
);

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" color="textSecondary">
        About
      </Typography>
      <StarDivider color={PossibleColors.PRIMARY} />
      <Typography variant="h3" color="textPrimary">
        Doing Optimized DevOps
      </Typography>
    </div>
  );
};

export default About;
