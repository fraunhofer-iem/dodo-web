import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { PossibleColors } from "../colors";
import ContentWrapper from "../home/SectionWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    <ContentWrapper variant="h2" title="About" contentColor={PossibleColors.PRIMARY}>
      <Typography className={classes.box} variant="body1" color="textSecondary">
        Maturity Models are valuable to communicate the current state of DevOps,
        especially towards the management. However, they often lack technical
        depth and do not provide any guidance on improving the current maturity.
        The research project DoDo addresses these shortcomings by combining a
        maturity model with technical metrics using a hierarchical system of
        KPIs. This method empowers its users to explore the detailed information
        comprehensively, thereby enabling them to discover a clear path for
        their DevOps journey.
      </Typography>
    </ContentWrapper>
  );
};

export default About;
