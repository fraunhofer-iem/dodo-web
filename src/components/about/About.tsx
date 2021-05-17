import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import logo from "./logo.svg";
import StarDivider from "../starDivider/StarDivider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: "24rem",
      marginLeft: "2rem",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.secondary.main,
      paddingBottom: "4rem",
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
      <img className={classes.img} src={logo} alt={"DoDo Project Logo"} />
      <Typography variant="h1" color="textPrimary">
        DoDo
      </Typography>
      <StarDivider />
      <Typography variant="h3" color="textPrimary">
        Doing Optimized DevOps
      </Typography>
    </div>
  );
};

export default About;
