import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { message } from "../assets/purchaseRefund";
import Footer from "./Footer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 150,
    backgroundColor: "white",
    color: "black"
  },
  card: {
    minWidth: 175,
    marginBottom: 30,
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  }
}));

export default function PurchaseRefund() {
  const classes = useStyles();

  const theme = createMuiTheme({
    overrides: {
      MuiCardContent: {
        root: {
          padding: "46px !important",
          "&:last-child": {
            paddingBottom: 0
          }
        }
      },
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: "transparent"
        }
      }
    }
  });
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#E94348",

          boxShadow: "none"
        }}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography className={classes.title}>
            <Link to="/">
              <img src="images/dynamicfx.png"></img>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Purchase &amp; Refund Policy
        </Typography>
        <div
          className={classes.link}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}
