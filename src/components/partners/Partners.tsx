import React from "react";
import { Box, Typography } from "@material-ui/core";
import ContentWrapper from "../home/SectionWrapper";
import iem from "./iem-logo.svg";
import bmbf from "./BMBF_Logo.svg";
import swc from "./scampus.jpg";

const Partners = () => {
  return (
    <ContentWrapper
      variant="h2"
      title="Partners"
      background={"#fff"}
      contentColor={"primary.main"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "10rem", marginLeft: "2rem" }}
          src={swc}
          alt={"Software Campus Logo"}
        />
        {/* <img
          className={classes.imgHorizontal}
          src={sag}
          alt={"Software AG Logo"}
        /> */}
        <img
          style={{ width: "15rem", marginLeft: "2rem" }}
          src={iem}
          alt={"Fraunhofer IEM Logo"}
        />
      </Box>
      <Typography variant="h4" color="textSecondary">
        Funded by
      </Typography>
      <img
        style={{ width: "10rem", marginLeft: "2rem" }}
        src={bmbf}
        alt={"BMBF Logo"}
      />
    </ContentWrapper>
  );
};

export default Partners;
