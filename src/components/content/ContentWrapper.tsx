import React, { PropsWithChildren } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  TypographyVariant,
} from "@material-ui/core";

import { DividerWithTitle } from "../starDivider/CustomDivider";
import { getColor, PossibleColors } from "../colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (props: Props) => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "5rem",
      paddingTop: "4rem",
      background: props.background ? getColor(theme, props.background) : "#fff",
    }),
  })
);

interface Props {
  title: string;
  variant: TypographyVariant;
  contentColor: PossibleColors;
  background?: PossibleColors;
}

const ContentWrapper = (props: PropsWithChildren<Props>) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <DividerWithTitle
        title={props.title}
        variant={props.variant}
        color={props.contentColor}
      />
      {props.children}
    </div>
  );
};

export default ContentWrapper;
