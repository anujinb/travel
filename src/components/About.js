import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import pic from "../img/2.jpeg"
import summer from "../img/16.png"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: " white",
    fontSize: "25px",
    fontFamily: "Yomogi",
  },
  img: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    left: 0,
    righ: 0,
    bottom: 0,
    margin: 0,
    zIndex: "-1",
  },
  secondPart: {
    backgroundColor: "#EFF2F5",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    alignSelf: "center",
    justifyContent: "center",
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
        <img src={pic} className={classes.img}></img>
        <h1>BUIR LAKE</h1>
      </div>
      <div className={classes.secondPart}>
        <Grid container spacing={10} justify="center">
          <Grid item>
            <img
              src={summer}
              style={{ width: 550, height: 350, paddingTop: 100 }}
            ></img>
          </Grid>
          <Grid item>
            <h2
              style={{
                paddingTop: 100,
                width: 400,
                height: 400,
                textAlign: "center",
                fontFamily: "Comfortaa",
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              Буйр нуур нь Монгол улсын хамгийн зүүн хязгаарт оршдог бөгөөд тал
              газар төдийлөн тохиолддоггүй нуур учир нар жаргах нь маш
              үзэсгэлэнтэй мөн олон зүйлийн загас, жигүүртэн шувуудаар баялаг,
              цэнгэг, усны арвин сан, чийглэг зөөлөн уур амьсгалтай.
            </h2>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
