import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { PossibleColors } from "../colors";
import ContentWrapper from "../home/SectionWrapper";
import FrameworkButtonLogo from "./FrameworkButton.png"
import ConceptWrapper from "./ConceptWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      width: "15rem",
      flexWrap: "wrap",
      flexGrow: 1,
    },
  })
);

const Concepts = () => {
  const classes = useStyles();

  return (
    <ContentWrapper
      variant="h2"
      title="Ideas & Concepts"
      contentColor={PossibleColors.WHITE}
      background={PossibleColors.SECONDARY}
    >
     <ConceptWrapper image={{url: FrameworkButtonLogo, title: "Framework", width: 300}} /> 
    </ContentWrapper>
  );
};

export default Concepts;
