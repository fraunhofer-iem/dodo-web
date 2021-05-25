import React from "react";
import { Box, Typography, TypographyVariant } from "@material-ui/core";

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { PossibleColors } from "../colors";

interface Props {
  color: PossibleColors;
}

interface PropsTitle {
  color: PossibleColors;
  title: string;
  variant: TypographyVariant;
}
export const DividerWithTitle = (props: PropsTitle) => {
  const textColor = props.color === "#fff" ? "textPrimary" : "textSecondary";
  return (
    <React.Fragment>
      <Typography variant={props.variant} color={textColor}>
        {props.title}
      </Typography>
      <StarDivider color={props.color} />
    </React.Fragment>
  );
};

export const StarDivider = (props: Props) => {
  const starLine = {
    border: "solid",
    height: "0.2rem",
    borderRadius: "1rem",
    color: props.color,
    width: "100%",
    maxWidth: "9rem",
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1.5rem 0 1.5rem",
        width: "100%",
      }}
    >
      <Box sx={starLine} />
      <StarRoundedIcon
        sx={{
          color: props.color,
          marginLeft: "1rem",
          marginRight: "1rem",
          fontSize: "3rem",
        }}
      />
      <Box sx={starLine} />
    </Box>
  );
};
