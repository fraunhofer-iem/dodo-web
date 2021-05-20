import { Typography } from "@material-ui/core";
import React from "react";

export const ContactFooter = () => {
  return (
    <React.Fragment>
      <Typography variant={"h4"} gutterBottom={true}>
        Contact
      </Typography>
      <Typography variant={"body1"}>Jan-Niclas Str&uuml;wer</Typography>
      <Typography variant={"body1"}>Fraunhofer IEM</Typography>
      <Typography variant={"body1"}>Zukunftsmeile 1</Typography>
      <Typography variant={"body1"} gutterBottom={true}>
        33102 Paderborn
      </Typography>
      <Typography variant={"body1"}>
        <a
          style={{ color: "#fff" }}
          href="mailto:jan-niclas.struewer@iem.fraunhofer.de"
        >
          jan-niclas.struewer(at)iem.fraunhofer.de
        </a>
      </Typography>
    </React.Fragment>
  );
};
