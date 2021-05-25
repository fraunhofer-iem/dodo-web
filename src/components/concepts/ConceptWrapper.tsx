import React, { useState } from "react";
import { Box } from "@material-ui/core";
import ImgButton from "./ImageButton";
import ImageDialog from "./ImageDialog";

interface Props {
  thumbnail: { title: string; width: number; url: string };
  dialogImage?: { title: string; width: number; url: string };
  dialogContent: { title: string; body: string };
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
      <ImageDialog
        dialogContent={props.dialogContent}
        dialogImage={props.dialogImage}
        onClose={handleClose}
        open={open}
      />
    </Box>
  );
};

export default ConceptWrapper;
