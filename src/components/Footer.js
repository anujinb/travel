import React from "react"
import Button from "@material-ui/core/Button"
import { Typography, IconButton } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PhoneIcon from "@material-ui/icons/Phone"
import RoomIcon from "@material-ui/icons/Room"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { useIntl } from "react-intl"

import message from "./messages"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#242424",
      padding: "2rem 0 2rem 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
    input: {
      borderRadius: 5,
      height: 32,
      marginRight: 20,
    },
    button: {
      color: "#fff",
      borderColor: "#fff",
    },
    icon: {
      color: "#fff",
    },
    bottom: {
      paddingTop: 30,
      fontFamily: "Akaya Telivigala",
      fontSize: "22px",
    },
  })
)
export default function Footer() {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  return (
    <div className={classes.root}>
      <h2>{formatMessage(message.SubscribeTitle)}</h2>
      <div style={{ marginBottom: 30 }}>
        <input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Email"
          type="email"
          className={classes.input}
        />
        <Button variant="outlined" className={classes.button}>
          {formatMessage(message.Subscribe)}
        </Button>
      </div>
      <div>
        <a href="tel:02 2731 3177">
          <IconButton>
            <PhoneIcon className={classes.icon} />
          </IconButton>
        </a>
        <IconButton
          className={classes.icon}
          onClick={() => {
            window.open("https://www.facebook.com/buirlake")
          }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          size="small"
          onClick={() => {
            window.open("https://www.instagram.com/buirtravel/?hl=en")
          }}
          className={classes.icon}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          className={classes.icon}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/place/Buir+travel/@47.862433,116.7742545,8z/data=!4m8!1m2!2m1!1sbuir+travel!3m4!1s0x5e760a7a108f8c45:0x5c69e402d62f75a!8m2!3d47.862433!4d117.89486"
            )
          }}
        >
          <RoomIcon />
        </IconButton>
      </div>
      <Typography className={classes.bottom}>
        {formatMessage(message.Logo)} © 2021
      </Typography>
    </div>
  )
}
