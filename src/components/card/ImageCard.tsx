import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import frameworkImg from './../overview/SoftwareCampus-No1.svg';
import { CardContent, CardHeader, CardMedia, } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
    },
    header: {
        color: '#128461',
    }, 
    details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
    frameworkImg: {
        height:'500px',
        width: '800px',
      },
  }),
);

export default function ImageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>

        <div className={classes.details}>
            <CardHeader className={classes.header} titleTypographyProps={{variant: 'h3'}} title="Road to DevOps"/>
            
            <CardContent className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
        </div>
        <CardMedia
        image={frameworkImg}
        className={classes.frameworkImg}
        title="DevOps"
      />
    
    </Card>
  );
}