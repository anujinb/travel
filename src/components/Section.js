import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import video from '../video/video-1.mp4';

const useStyles = makeStyles((theme) =>
  createStyles({
    buttons: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function Section() {
  const classes = useStyles();
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'contain',
        textAlign: 'middle',
      }}
    >
      <video
        src={video}
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          left: 0,
          zIndex: '-1',
        }}
      />
      <h1
        style={{
          marginTop: '-1px',
          color: ' white',
          fontSize: '50px',
          marginBottom: 0,
        }}
      >
        ADVENTURE AWAITS
      </h1>
      <p style={{ color: 'white', marginTop: 8, fontSize: '30px' }}>
        What are you waiting for?
      </p>
      <div className={classes.buttons}>
        <Button
          style={{
            color: 'white',
            borderColor: 'white',
            fontSize: '17px',
            width: 180,
            height: 40,
          }}
          variant="outlined"
        >
          Get started
        </Button>
        <Button
          variant="contained"
          color="fff"
          component="span"
          style={{ width: 180, height: 40 }}
        >
          Watch trailer
          <PlayCircleOutlineIcon />
        </Button>
      </div>
    </div>
  );
}
