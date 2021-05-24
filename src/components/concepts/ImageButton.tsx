import React from "react";
import { ButtonBase, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      position: 'relative',
      height: 200,
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.5,
        },
        '& $imageTitle': {
          fontSize: '10rem',
          opacity: 1
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 50,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      opacity: 0,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      opacity: 0
    },
  }),
);

interface Props {
    image: {title: string, width: number, url: string}
    handleClick: () => void
}
const ImageButton = (props: Props) => {
  const classes = useStyles();
  return (
    <ButtonBase
    focusRipple
    key={props.image.title}
    className={classes.image}
    onClick={props.handleClick}
    focusVisibleClassName={classes.focusVisible}
    style={{
      width: props.image.width,
    }}
  >
    <span
      className={classes.imageSrc}
      style={{
        backgroundImage: `url(${props.image.url})`,
      }}
    />
    <span className={classes.imageBackdrop} />
    <span className={classes.imageButton}>
            <Typography
              component="span"
              color="secondary"
              className={classes.imageTitle}
            >
              <AddOutlined  fontSize="inherit"/>

            </Typography>
          </span>
  </ButtonBase>
  );
};

export default ImageButton;
