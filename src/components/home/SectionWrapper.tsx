import React, { PropsWithChildren } from "react";
import { Box, TypographyVariant } from "@material-ui/core";
import { DividerWithTitle } from "../starDivider/CustomDivider";
import { PossibleColors } from "../colors";

interface Props {
  title: string;
  variant: TypographyVariant;
  contentColor: PossibleColors;
  background: PossibleColors;
}

const SectionWrapper = (props: PropsWithChildren<Props>) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "5rem",
        paddingTop: "4rem",
        backgroundColor: props.background,
      }}
    >
      <DividerWithTitle
        title={props.title}
        variant={props.variant}
        color={props.contentColor}
      />
      {props.children}
    </Box>
  );
};

export default SectionWrapper;
