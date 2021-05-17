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
      marginLeft: "3rem",
      columnCount: 2,
      width: "40rem",
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
      <Typography className={classes.box} variant="body1" color="textSecondary">
        This is a bunch of text split into three columns using the CSS
        `column-count` property. The text is equally distributed over the
        columns. This is a bunch of text split into three columns using the CSS
        `column-count` property. The text is equally distributed over the
        columns. This is a bunch of text split into three columns using the CSS
        `column-count` property. The text is equally distributed over the
        columns. This is a bunch of text split into three columns using the CSS
        `column-count` property. The text is equally distributed over the
        columns.
      </Typography>
    </div>
  );
};

export default About;
