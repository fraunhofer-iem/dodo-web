import React from "react";
import {
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { PossibleColors } from "../colors";
import ContentWrapper from "../home/SectionWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fff",
      flexWrap: "wrap",
      gap: "5rem",
    },
    box: {
      marginLeft: "3rem",
      width: "40rem",
    },
  })
);

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ContentWrapper
        variant="h2"
        title="About"
        contentColor={PossibleColors.PRIMARY}
      >
        <Typography
          className={classes.box}
          variant="body1"
          color="textSecondary"
        >
          DoDo is a research project in the context of the{" "}
          <Link href="https://softwarecampus.de">Software Campus</Link>, which
          is funded by the BMBF. The main goal of the project is to support
          companies in their DevOps journey by providing insights and guidance
          based on metrics and maturity models.
          <br />
          The project is conducted at the{" "}
          <Link href="https://www.iem.fraunhofer.de/">Fraunhofer IEM</Link>,
          which provides the research advisers for the scientific questions. The
          project is further supported by an industry partner the{" "}
          <Link href="https://www.softwareag.com">Software AG</Link>, who
          provide further insights into the practical applications of the
          developed approach.
        </Typography>
      </ContentWrapper>
      <ContentWrapper
        variant="h2"
        title="Project Idea"
        contentColor={PossibleColors.PRIMARY}
      >
        <Typography
          className={classes.box}
          variant="body1"
          color="textSecondary"
        >
          Maturity Models are valuable to communicate the current state of
          DevOps, especially towards upper management. However, they often lack
          technical depth and do not provide any guidance on improving the
          current maturity level.
          <br />
          The research project DoDo addresses these shortcomings by combining a
          maturity model with technical metrics using a hierarchical system of
          KPIs. This method empowers its users to explore the detailed
          information comprehensively, thereby enabling them to discover a clear
          path for their DevOps journey.
        </Typography>
      </ContentWrapper>
    </div>
  );
};

export default About;
