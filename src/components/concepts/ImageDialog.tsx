import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import { DividerWithTitle } from "../starDivider/CustomDivider";

interface Props {
  open: boolean;
  onClose: () => void;
  dialogImage?: { title: string; width: number; url: string };
  dialogContent: { title: string; body: string };
}
const ImageDialog = (props: Props) => {
  const { onClose, open } = props;
  const image = () => {
    if (props.dialogImage) {
      return (
        <img
          style={{ width: "80%", borderRadius: "1rem", marginBottom: "4rem" }}
          src={props.dialogImage.url}
          alt={props.dialogImage.title}
        />
      );
    } else {
      return <React.Fragment />;
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            borderRadius: "1rem",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <DividerWithTitle
              title={props.dialogContent.title}
              color={"primary.main"}
              variant="h2"
            />

            {image()}
            <Typography variant="body1">{props.dialogContent.body}</Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ImageDialog;
