import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 50
  },
  imageItem: {
    height: 300,
    textAlign: "center",
    minHeight: 100
  },
  card: {
    maxWidth: 275,
    backgroundColor: "rgba(255, 109, 109, 0.4)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    color: "white"
  },
  menuLinks: {
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase"
  },
  circles: {
    color: "white",
    backgroundColor: "#E94348",
    width: 150,
    height: 150
  }
}));

export default function Services() {
  const classes = useStyles();
  const ColorButton = withStyles(theme => ({
    root: {
      backgroundColor: "#E94348",
      "&:hover": {
        backgroundColor: "#E94348"
      },
      width: "75%",
      marginTop: 20
    }
  }))(Button);
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid
          container
          sm={4}
          direction="column"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          {" "}
          <Grid item xs>
            <Avatar className={classes.circles}>
              <img src="images/sendPhone.png" style={{ width: "70%" }}></img>
            </Avatar>
          </Grid>
          <Grid item xs style={{ marginLeft: 40, marginRight: 60 }}>
            <Typography variant="h6" align="center">
              Gain consistent profits each day with top signals sent directly to
              your phone
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sm={4}
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={6}
        >
          {" "}
          <Grid item xs>
            <Avatar className={classes.circles}>
              <img src="images/percent.png" style={{ width: "70%" }}></img>
            </Avatar>
          </Grid>
          <Grid item xs style={{ marginLeft: 20, marginRight: 20 }}>
            <Typography variant="h6" align="center">
              With an industry-leading 82% signal accuracy achieved monthly,
              experience the same profits expert traders get by using the
              highest accuracy signal in the industry.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sm={4}
          direction="column"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs>
            <Avatar className={classes.circles}>
              <img src="images/buysell.png" style={{ width: "70%" }}></img>
            </Avatar>
          </Grid>
          <Grid item xs style={{ marginLeft: 30, marginRight: 30 }}>
            <Typography variant="h6" align="center">
              Have more confidence when investing in the markets.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
