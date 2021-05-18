import React, { PropsWithChildren } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  TypographyVariant,
} from "@material-ui/core";

import { DividerWithTitle } from "../starDivider/CustomDivider";
import { PossibleColors } from "../colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "5rem",
      paddingTop: "4rem",
    },
  })
);

interface Props {
  title: string;
  variant: TypographyVariant;
  color: PossibleColors;
}

const ContentWrapper = (props: PropsWithChildren<Props>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DividerWithTitle
        title={props.title}
        variant={props.variant}
        color={props.color}
      />
      {props.children}
    </div>
  );
};

export default ContentWrapper;
