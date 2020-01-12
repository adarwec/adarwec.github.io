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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 150,
      marginRight: 150
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 350,
      marginRight: 350
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 380,
      marginRight: 380
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: 550,
      marginRight: 550
    },
    color: "black"
  },
  card: {
    minWidth: 175,
    marginBottom: 30,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: 30
    }
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
  }
}));

export default function Works() {
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
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Fade left duration={1000}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                style={{ fontWeight: "bold" }}
              >
                1. Select Package
              </Typography>
              <Typography variant="body2" component="p">
                Whether you are a beginner or an expert, our plans cater to all
                investors.
              </Typography>
            </CardContent>
          </Card>
        </Fade>
        <Fade right duration={2000}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                style={{ fontWeight: "bold" }}
              >
                2. Welcome Email
              </Typography>
              <Typography variant="body2" component="p">
                Once we have received your payment, we will send your welcome
                email that contains registration instructions.
              </Typography>
            </CardContent>
          </Card>
        </Fade>
        <Fade left duration={3000}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                style={{ fontWeight: "bold" }}
              >
                3. Receive Signals
              </Typography>
              <Typography variant="body2" component="p">
                We activate the daily forex signals. You will receive profitable
                trading signals daily.
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </MuiThemeProvider>
    </div>
  );
}
