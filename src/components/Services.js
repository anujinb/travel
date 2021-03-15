import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../img/10.jpg';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: ' white',
    fontSize: '40px',
  },
  img: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    left: 0,
    zIndex: '-1',
  },
}));

export default function Services() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.img} src={image} alt="pic" />
      <h1>Services</h1>
    </div>
  );
}
