import { Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.primary.dark,
      paddingBottom: "1rem",
      paddingTop: "1rem",
      color: "#fff",
    },
    link: {
      color: "#fff",
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
);

export const Copyright = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Copyright © by Fraunhofer-Gesellschaft |</Typography>
      <Link to={"/impressum"} component={RouterLink} className={classes.link}>
         Impressum &amp; Data Protection
      </Link>
    </div>
  );
};
