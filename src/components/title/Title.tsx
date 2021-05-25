import React from "react";
import { Box, Typography } from "@material-ui/core";
import logo from "./logo.svg";
import { DividerWithTitle } from "../starDivider/CustomDivider";

const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        paddingBottom: "5rem",
        paddingTop: "4rem",
      }}
    >
      <img
        style={{ width: "22rem", marginLeft: "2rem" }}
        src={logo}
        alt={"DoDo Project Logo"}
      />
      <DividerWithTitle title="DoDo" variant="h1" color={"#fff"} />
      <Typography variant="h3" color="textPrimary">
        Doing Optimized DevOps
      </Typography>
    </Box>
  );
};

export default Title;
