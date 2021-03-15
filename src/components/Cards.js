import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image1 from '../img/1.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image7 from '../img/7.jpg';
import image9 from '../img/9.jpg';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 27,
    fontFamily: 'Akaya Telivigala',
  },
}));

export default function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Check out this EPIC Destination!</h2>
      <Grid container spacing={6} justify="center">
        <Grid item>
          <Card>
            <CardMedia>
              <img src={image9} alt="1" height="350" width="450" />
            </CardMedia>
            <CardContent>
              <Typography
                style={{ fontFamily: 'Akaya Telivigala' }}
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Admire this impressive view
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia>
              <img src={image7} alt="1" height="350" width="450" />
            </CardMedia>
            <CardContent>
              <Typography
                style={{ fontFamily: 'Akaya Telivigala' }}
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Explore the beatiful lake
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        justify="center"
        style={{ marginTop: 25, paddingBottom: 35 }}
      >
        <Grid item>
          <Card>
            <CardMedia>
              <img src={image4} alt="1" height="194" width="294" />
            </CardMedia>
            <CardContent>
              <Typography
                style={{ fontFamily: 'Akaya Telivigala' }}
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Enjoy the nature
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia>
              <img src={image5} alt="1" height="194" width="294" />
            </CardMedia>
            <CardContent>
              <Typography
                style={{ fontFamily: 'Akaya Telivigala' }}
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Set sail in the lake
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia>
              <img src={image1} alt="1" height="194" width="294" />
            </CardMedia>
            <CardContent>
              <Typography
                style={{ fontFamily: 'Akaya Telivigala' }}
                variant="h6"
                color="textPrimary"
                component="p"
              >
                Wandering around
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
