import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './logo-with-name.svg';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    linkSpacing: {
      '& > * + *':{
      marginLeft: theme.spacing(2)
      }
    },
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <div className={classes.root}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
        <img style={{height:'120px',
      width: '140px'}} src={logo} alt="Logo" />
      <div className={classes.root}/>
          <Typography variant="h6" color="textPrimary" className={classes.linkSpacing}>
            <Link href="#" onClick={preventDefault} color="inherit">
              Overview
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              Team
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              Partner
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              Contact
            </Link>
            <Button variant="contained">Tool Preview</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}