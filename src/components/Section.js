import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import video from "../video/video-1.mp4"
import { useHistory } from "react-router-dom"

import { useIntl } from "react-intl"

import message from "./messages"

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.2)",
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      objectFit: "contain",
      textAlign: "middle",

      margin: 0,
    },
    video: {
      position: "fixed",

      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
      margin: 0,
    },
    buttons: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
)

export default function Section() {
  const classes = useStyles()
  const history = useHistory()
  const { formatMessage } = useIntl()

  return (
    <div className={classes.container}>
      <video
        src={video}
        type="video/mp4"
        autoPlay
        loop
        muted
        className={classes.video}
      />
      <h1
        style={{
          marginTop: "-1px",
          color: " white",
          textAlign: "center",
          fontSize: "50px",
          marginBottom: 0,
        }}
      >
        {formatMessage(message.MainText)}
      </h1>
      <p style={{ color: "white", marginTop: 8, fontSize: "30px" }}>
        {formatMessage(message.SubText)}
      </p>
      <div className={classes.buttons}>
        <Button
          style={{
            color: "white",
            borderColor: "white",
            fontSize: "17px",
            width: 180,
            height: 40,
          }}
          variant="outlined"
          onClick={() => history.push("about")}
        >
          {formatMessage(message.Start)}
        </Button>
        <Button
          variant="contained"
          color="fff"
          component="span"
          style={{ width: 180, height: 40 }}
          onClick={() => window.open("https://youtu.be/-AgC4sFh6Lg")}
        >
          {formatMessage(message.Trailer)}
          <PlayCircleOutlineIcon />
        </Button>
      </div>
    </div>
  )
}
