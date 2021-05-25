import React, { useState } from "react";
import ImgButton from "./ImageButton";
import ImageDialog from "./ImageDialog";

interface Props {
  image: { title: string; width: number; url: string };
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
    <React.Fragment>
      <ImgButton handleClick={handleClick} image={props.image} />
      <ImageDialog onClose={handleClose} open={open} />
    </React.Fragment>
  );
};

export default ConceptWrapper;
