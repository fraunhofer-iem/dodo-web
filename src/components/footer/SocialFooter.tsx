import { Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";

import { FooterButton } from "./FooterButton";

export const SocialFooter = () => {
  return (
    <React.Fragment>
      <Typography variant={"h4"} gutterBottom={true}>
        Around the Web
      </Typography>
      <div>
        <FooterButton href="https://twitter.com/FraunhoferIEM">
          <Twitter fontSize="large" />
        </FooterButton>
        <FooterButton href="https://www.linkedin.com/company/fraunhofer-iem">
          <LinkedIn fontSize="large" />
        </FooterButton>
        <FooterButton href="https://github.com/fraunhofer-iem">
          <GitHub fontSize="large" />
        </FooterButton>
      </div>
    </React.Fragment>
  );
};
