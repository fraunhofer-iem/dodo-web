import {
  Avatar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { PropsWithChildren } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.primary.main,
      border: "0.1px solid white",
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

interface Props {
  href: string;
}

export const FooterButton = (props: PropsWithChildren<Props>) => {
  const classes = useStyles();
  return (
    <IconButton href={props.href}>
      <Avatar className={classes.avatar}>{props.children}</Avatar>
    </IconButton>
  );
};
