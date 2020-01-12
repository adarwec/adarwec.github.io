import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 40,
    paddingTop: 50,
    paddingBottom: 50
  },
  imageItem: {
    width: 600,
    textAlign: "center",
    minHeight: 100,
    [theme.breakpoints.up("lg")]: {
      paddingTop: 50
    }
  },
  card: {
    maxWidth: 275,
    backgroundColor: "rgba(255, 109, 109, 0.4)"
  },
  title: {
    color: "white"
  },
  menuLinks: {
    color: "white",
    textDecoration: "none"
  }
}));

export default function About() {
  const classes = useStyles();
  const ColorButton = withStyles(theme => ({
    root: {
      backgroundColor: "#E94348",
      "&:hover": {
        backgroundColor: "#E94348"
      },
      width: "30%",
      marginTop: 20
      // [theme.breakpoints.up("xs")]: {
      //   width: "20%"
      // }
    }
  }))(Button);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={4}
      >
        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h4" align="center" style={{ marginBottom: 30 }}>
            Expert Trading Signals Sent to Your Phone
          </Typography>
          <Typography variant="h6" align="center">
            Daily access to profitable forex trading alerts. Our members have
            consistently enjoyed our daily alerts. If you are unsatisfied with
            the results, we will gladly issue a refund, satisfaction guaranteed.
            We like to make sure you are fully geared to come out on top.
          </Typography>
          <ColorButton variant="contained" color="primary" size="large">
            <AnchorLink
              offset="50"
              className={clsx(classes.menuLinks)}
              href="#plans"
            >
              Start now !
            </AnchorLink>
          </ColorButton>
        </Grid>
        <Grid container item xs={12} sm={6} justify="center">
          <img className={classes.imageItem} src="images/about.png"></img>
        </Grid>
      </Grid>
    </div>
  );
}
