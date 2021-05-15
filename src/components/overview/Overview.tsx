import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import frameworkImg from "./SoftwareCampus-No1.svg";
import toolImg from "./SoftwareCampus-No2.svg";
import { Grid } from "@material-ui/core";
import ImageCard from "../card/ImageCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "10px",
    },
    frameworkImg: {
      height: "500px",
      width: "500px",
    },
    toolImg: {
      height: "500px",
      width: "500px",
    },
  })
);

export default function Overview() {
  const classes = useStyles();

  return (
    <div ref={el => {
      if (el !== null) {
      console.log(el);
      console.log(el.getBoundingClientRect());
      }
    }} className={classes.root}>
      <Grid>
        <ImageCard />
        <img
          className={classes.frameworkImg}
          src={frameworkImg}
          alt="Framework Content"
        />
        <img className={classes.toolImg} src={toolImg} alt="Tool Overview" />
      </Grid>
    </div>
  );
}
