import React from "react";
import { Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from '@material-ui/styles';
import { PossibleColors } from "../colors";
import ContentWrapper from "../home/SectionWrapper";
import iem from "./iem-logo.svg";
import bmbf from "./BMBF_Logo.svg";
import swc from "./scampus.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "10rem",
      marginLeft: "2rem",
    },
    imgHorizontal: {
      width: "15rem",
      marginLeft: "2rem",
    },
  })
);

const Partners = () => {
  const classes = useStyles();
  return (
    <ContentWrapper
      variant="h2"
      title="Partners"
      contentColor={PossibleColors.PRIMARY}
    >
      <div className={classes.box}>
        <img className={classes.img} src={swc} alt={"Software Campus Logo"} />
        {/* <img
          className={classes.imgHorizontal}
          src={sag}
          alt={"Software AG Logo"}
        /> */}
        <img
          className={classes.imgHorizontal}
          src={iem}
          alt={"Fraunhofer IEM Logo"}
        />
      </div>
      <Typography variant="h4" color="textSecondary">
        Funded by
      </Typography>
      <img className={classes.img} src={bmbf} alt={"BMBF Logo"} />
    </ContentWrapper>
  );
};

export default Partners;
