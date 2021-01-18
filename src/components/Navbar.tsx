import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexGrow: 1,
  },
});

const NavBar = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Button size="large" color="primary" component={NavLink} to="/">
        Home
      </Button>
      <Button size="large" color="primary" component={NavLink} to="/about">
        About
      </Button>
    </Box>
  );
};

export default NavBar;
