import * as React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { AddOutlined } from "@material-ui/icons";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      opacity: 1,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.primary.main,
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

interface Props {
  image: { title: string; width: number; url: string };
  handleClick: () => void;
}
export default function ImgButton(props: Props) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      <ImageButton
        focusRipple
        key={props.image.title}
        onClick={props.handleClick}
        style={{
          width: props.image.width,
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${props.image.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            color="white"
            sx={{
              fontSize: "10rem",
              position: "relative",
              p: 4,
              pt: 10,
              opacity: 0,
            }}
          >
            <AddOutlined fontSize="inherit" />
          </Typography>
        </Image>
      </ImageButton>
    </Box>
  );
}
