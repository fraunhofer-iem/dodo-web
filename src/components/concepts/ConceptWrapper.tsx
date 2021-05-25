import React, { useState } from "react";
import { Box } from "@material-ui/core";
import ImgButton from "./ImageButton";
import ImageDialog from "./ImageDialog";

interface Props {
  thumbnail: { title: string; width: number; url: string };
  contentImage?: { title: string; width: number; url: string };
  contentDescription: string;
}
const ConceptWrapper = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <ImgButton handleClick={handleClick} image={props.thumbnail} />
      <ImageDialog onClose={handleClose} open={open} />
    </Box>
  );
};

export default ConceptWrapper;
