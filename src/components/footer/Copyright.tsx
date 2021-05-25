import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

export const Copyright = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.dark",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        color: "#fff",
      }}
    >
      <Typography>Copyright © by Fraunhofer-Gesellschaft |</Typography>
      <Link
        to={"/impressum"}
        component={RouterLink}
        sx={{ color: "#fff", ":hover": { textDecoration: "none" } }}
      >
         Impressum &amp; Data Protection
      </Link>
    </Box>
  );
};
