import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { PossibleColors } from "../colors";
import ContentWrapper from "../home/SectionWrapper";
import ImageButton from "./ImageButton";
import FrameworkButtonLogo from "./FrameworkButton.png"
import { url } from "inspector";
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
  console.log(FrameworkButtonLogo);
  return (
    <ContentWrapper
      variant="h2"
      title="Ideas & Concepts"
      contentColor={PossibleColors.WHITE}
      background={PossibleColors.SECONDARY}
    >
      <ImageButton image={{url: FrameworkButtonLogo, title: "Framework", width: 300}}/>
    </ContentWrapper>
  );
};

export default Concepts;
