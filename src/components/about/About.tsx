import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import logo from "./logo.svg";
import StarDivider from "../starDivider/StarDivider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.secondary.main,
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
          <StarDivider />
          We continue
        </Box>
      </Container>
    </div>
  );
};

export default About;
