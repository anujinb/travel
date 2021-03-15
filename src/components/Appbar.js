import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#202020',
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  logoLink: { flexGrow: 1, textDecoration: 'none' },
  logo: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Grand Hotel',
    marginLeft: 35,
  },
  links: { textDecoration: 'none', marginRight: theme.spacing(5) },
  navItems: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Source Pro',
    '&:hover': {
      background: '#fff',
      color: '#171717',
    },
  },
  paper: { backgroundColor: '#171717', width: '100%' },
  listItemText: {
    fontSize: 17,
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
  },
  list: {
    paddingTop: 0,
  },
  listItem: {
    color: 'white',
    textAlign: 'center',
    height: 70,
  },
  listButton: {
    color: 'white',
    marginTop: 0,
    paddingTop: 0,
    height: 70,
    '&:hover': {
      background: '#fff',
      color: '#171717',
    },
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Link to="/" className={classes.logoLink}>
            <Typography className={classes.logo}>
              Buir Travel
              <BeachAccessIcon fontSize="small" style={{ marginLeft: 5 }} />
            </Typography>
          </Link>
          <Hidden xsDown>
            <Link to="/" className={classes.links}>
              <Button className={classes.navItems}>HOME</Button>
            </Link>
            <Link to="/services" className={classes.links}>
              <Button className={classes.navItems}>SERVICES</Button>
            </Link>
            <Link
              to="/booking"
              style={{ textDecoration: 'none', marginRight: 90 }}
            >
              <Button className={classes.navItems}>BOOKING</Button>
            </Link>
          </Hidden>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              classes={{ paper: classes.paper }}
              anchor="right"
              open={open}
            >
              <Toolbar>
                <Link to="/" className={classes.logoLink}>
                  <Typography className={classes.logo}>
                    Buir Travel
                    <BeachAccessIcon fontSize="small" />
                  </Typography>
                </Link>
                <IconButton
                  style={{
                    color: 'white',
                  }}
                >
                  <CloseIcon onClick={handleDrawerClose} />
                </IconButton>
              </Toolbar>
              <div className={classes.list}>
                <Link to="/" className={classes.link}>
                  <List>
                    <ListItem
                      button
                      key="HOME"
                      className={classes.listButton}
                      onClick={handleDrawerClose}
                    >
                      <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="HOME"
                      />
                    </ListItem>
                  </List>
                </Link>
                <Link to="/services" className={classes.link}>
                  <List>
                    <ListItem
                      button
                      key="SERVICES"
                      className={classes.listButton}
                      onClick={handleDrawerClose}
                    >
                      <ListItemText
                        primary="SERVICES"
                        classes={{ primary: classes.listItemText }}
                      />
                    </ListItem>
                  </List>
                </Link>
                <Link to="/booking" className={classes.link}>
                  <List>
                    <ListItem
                      button
                      key="PRODUCTS"
                      className={classes.listButton}
                      onClick={handleDrawerClose}
                    >
                      <ListItemText
                        primary="BOOKING"
                        classes={{ primary: classes.listItemText }}
                      />
                    </ListItem>
                  </List>
                </Link>
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
