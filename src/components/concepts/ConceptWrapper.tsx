import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import ImageButton from "./ImageButton";
import ImageDialog from "./ImageDialog";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
);

interface Props {
    image: {title: string, width: number, url: string}
}
const ConceptWrapper = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
      setOpen(false);
  }
  return (
    <React.Fragment>
 <ImageButton handleClick={handleClick} image={props.image}/>
        <ImageDialog onClose={handleClose} open={open}/ >
    </React.Fragment>
  );
};

export default ConceptWrapper;
