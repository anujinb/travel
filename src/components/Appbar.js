import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import {
  AppBar,
  Button,
  List,
  ListItem,
  Hidden,
  Drawer,
  ListItemText,
  Toolbar,
  Typography,
  Select,
  MenuItem as _MenuItem,
  styled,
} from "@material-ui/core"
import TranslateIcon from "@material-ui/icons/Translate"
import BeachAccessIcon from "@material-ui/icons/BeachAccess"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"
import { useIntl } from "react-intl"

import message from "./messages"
import AppContext from "../AppContext"

const MenuItem = styled(_MenuItem)({
  color: "#36354b",
})

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#202020",
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  iconSelect: {
    fill: "#fff",
  },
  select: {
    borderBottom: "none",
    color: "#fff",
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "#fff",
    backgroundColor: "transparent",
  },
  logoLink: { flexGrow: 1, textDecoration: "none" },
  logo: {
    fontSize: 30,
    color: "white",
    fontFamily: "Grand Hotel",
    marginLeft: 35,
  },
  links: { textDecoration: "none", marginRight: theme.spacing(5) },
  navItems: {
    fontSize: 18,
    color: "white",
    fontFamily: "Source Pro",
    "&:hover": {
      background: "#fff",
      color: "#171717",
    },
  },
  paper: { backgroundColor: "#171717", width: "100%" },
  listItemText: {
    fontSize: 17,
    fontFamily: "Source Sans Pro",
    textAlign: "center",
  },
  list: {
    paddingTop: 0,
  },
  listItem: {
    color: "white",
    textAlign: "center",
    height: 70,
  },
  listButton: {
    color: "white",
    marginTop: 0,
    paddingTop: 0,
    height: 70,
    "&:hover": {
      background: "#fff",
      color: "#171717",
    },
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
  },
}))

export default function NavBar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { formatMessage } = useIntl()
  const { onChangeUserLocale, userLocale } = useContext(AppContext)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Link to="/" className={classes.logoLink}>
            <Typography className={classes.logo}>
              {formatMessage(message.Logo)}
              <BeachAccessIcon fontSize="small" style={{ marginLeft: 5 }} />
            </Typography>
          </Link>

          <Hidden xsDown>
            <Link to="/" className={classes.links}>
              <Button className={classes.navItems}>
                {formatMessage(message.Home)}
              </Button>
            </Link>
            <Link to="/services" className={classes.links}>
              <Button className={classes.navItems}>
                {formatMessage(message.Services)}
              </Button>
            </Link>
            <Link
              to="/booking"
              style={{ textDecoration: "none", marginRight: 90 }}
            >
              <Button className={classes.navItems}>
                {formatMessage(message.Booking)}
              </Button>
            </Link>

            <Button
              className={classes.formControl}
              startIcon={<TranslateIcon />}
            >
              <Select
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.iconSelect,
                  },
                }}
                value={userLocale}
                onChange={(e) => {
                  onChangeUserLocale(e.target.value)
                }}
              >
                <MenuItem value={"mn-MN"}>
                  {formatMessage(message.MongolianMode)}
                </MenuItem>
                <MenuItem value={"en-US"}>
                  {formatMessage(message.EnglishMode)}
                </MenuItem>
              </Select>
            </Button>
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
                    {formatMessage(message.Logo)}
                    <BeachAccessIcon fontSize="small" />
                  </Typography>
                </Link>
                <IconButton
                  style={{
                    color: "white",
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
                        primary={formatMessage(message.Home)}
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
                        primary={formatMessage(message.Services)}
                        classes={{ primary: classes.listItemText }}
                      />
                    </ListItem>
                  </List>
                </Link>
                <Link to="/booking" className={classes.link}>
                  <List>
                    <ListItem
                      button
                      key="BOOKING"
                      className={classes.listButton}
                      onClick={handleDrawerClose}
                    >
                      <ListItemText
                        primary={formatMessage(message.Booking)}
                        classes={{ primary: classes.listItemText }}
                      />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem
                      button
                      key="PRODUCTS"
                      className={classes.listButton}
                      onClick={handleDrawerClose}
                    >
                      <ListItemText
                        primary={formatMessage(message.Booking)}
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
  )
}
