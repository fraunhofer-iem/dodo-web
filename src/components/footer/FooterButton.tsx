import { Avatar, IconButton } from "@material-ui/core";
import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
}

export const FooterButton = (props: PropsWithChildren<Props>) => {
  return (
    <IconButton href={props.href}>
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          border: "0.1px solid white",
          width: "3rem",
          height: "3rem",
        }}
      >
        {props.children}
      </Avatar>
    </IconButton>
  );
};
