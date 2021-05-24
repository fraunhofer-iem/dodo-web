import React from "react";
import {
  Typography,
  TypographyVariant,
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from '@material-ui/styles';

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { getColor, PossibleColors } from "../colors";

interface Props {
  color: PossibleColors;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    star: (props: Props) => ({
      color: getColor(theme, props.color),
      marginLeft: "1rem",
      marginRight: "1rem",
      fontSize: "3rem",
    }),
    starWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "1.5rem 0 1.5rem",
      width: "100%",
    },
    starLine: (props: Props) => ({
      border: "solid",
      height: "0.2rem",
      borderRadius: "1rem",
      color: getColor(theme, props.color),
      width: "100%",
      maxWidth: "9rem",
    }),
  })
);
interface PropsTitle {
  color: PossibleColors;
  title: string;
  variant: TypographyVariant;
}
export const DividerWithTitle = (props: PropsTitle) => {
  const textColor =
    props.color === PossibleColors.WHITE ? "textPrimary" : "textSecondary";
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
  const classes = useStyles(props);
  return (
    <div className={classes.starWrapper}>
      <div className={classes.starLine} />
      <StarRoundedIcon className={classes.star} />
      <div className={classes.starLine} />
    </div>
  );
};
