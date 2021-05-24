import {
  Avatar,
  IconButton,
} from "@material-ui/core";
import React, { PropsWithChildren } from "react";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from '@material-ui/styles';

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
