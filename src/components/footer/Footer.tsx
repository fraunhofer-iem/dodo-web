import { Box } from "@material-ui/core";
import React from "react";
import { ContactFooter } from "./ContactFooter";
import { Copyright } from "./Copyright";

import { SocialFooter } from "./SocialFooter";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        paddingTop: "4rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          "> *": {
            display: "flex",
            marginLeft: "4rem",
            marginRight: "4rem",
            marginBottom: "1rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          },
        }}
      >
        <Box>
          <ContactFooter />
        </Box>
        <Box>
          <SocialFooter />
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
};
