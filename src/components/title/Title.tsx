import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import logo from "./logo.svg";
import { StarDivider } from "../starDivider/CustomDivider";

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
      background: theme.palette.secondary.main,
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

const Title = () => {
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

export default Title;
