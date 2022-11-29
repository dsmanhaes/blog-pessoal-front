import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import './About.css';

const style = makeStyles({
  root: {
    background: green[500],
    color: red[500]
  }
});

function About () {
  const classes = style();
  
  return (
    <h1 className={classes.root}>Página About</h1>
  );
}

export { About };
