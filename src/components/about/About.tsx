import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import logo from "./logo.svg";

const value = "★";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.secondary.main,
    },
    starDivider: {
      border: "solid",
      height: "0.25rem",
      borderRadius: "1rem",
      color: "#fff",
      overflow: "visible",
      textAlign: "center",
      width: "100%",
      maxWidth: "15rem",
      "&:after": {
        fontSize: "2rem",
        background: theme.palette.secondary.main,
        content: '"' + value + '"',
        padding: "0 1rem",
        position: "relative",
     top: "-1rem",
      },
    },
  })
);

interface Props {}

const About = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <img width="300px" src={logo} alt={"DoDo Project Logo"} />
          <Typography variant="h1" color="textPrimary">
            DoDo
          </Typography>
          <Divider className={classes.starDivider} />
          We continue
        </Box>
      </Container>
    </div>
  );
};

export default About;
