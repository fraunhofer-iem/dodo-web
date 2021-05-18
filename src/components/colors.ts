import { Theme } from "@material-ui/core";

export enum PossibleColors {
  WHITE,
  PRIMARY,
  SECONDARY,
}

export const getColor = (theme: Theme, color: PossibleColors) => {
  switch (color) {
    case PossibleColors.WHITE:
      return "#fff";
    case PossibleColors.PRIMARY:
      return theme.palette.primary.main;
    case PossibleColors.SECONDARY:
      return theme.palette.secondary.main;
  }
};
