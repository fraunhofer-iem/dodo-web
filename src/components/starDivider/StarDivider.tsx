import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import StarRoundedIcon from "@material-ui/icons/StarRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    star: {
      color: "#fff",
      fontSize: "3rem",
    },
    starWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "1.25rem 0 1.5rem",
      width: "100%",
    },
    starLine: {
      border: "solid",
      height: "0.25rem",
      borderRadius: "1rem",
      color: "#fff",
      width: "100%",
      maxWidth: "7rem",
    },
  })
);


const StarDivider = () => {
  const classes = useStyles();
  return (
    <div className={classes.starWrapper}>
      <div className={classes.starLine} />
      <StarRoundedIcon className={classes.star} />
      <div className={classes.starLine} />
    </div>
  );
};

export default StarDivider;
