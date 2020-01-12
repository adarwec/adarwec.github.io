import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { plansList } from "../assets/plans";

const useStyles = makeStyles(theme => ({
  root: {
    color: "black",
    margin: 50
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    "&:hover": {
      boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.2)"
    }
  },
  grid: {
    "&:hover": {
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)"
    }
  },
  card: {
    padding: 20,
    height: "100%",
    minWidth: 275,
    "&:hover": {
      boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.2)"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase"
  },
  pos: {
    marginBottom: 12
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  },
  secondary: {
    fontSize: 12,
    textTransform: "uppercase",
    marginTop: 20,
    marginBottom: 20
  }
}));

export default function Plans() {
  const classes = useStyles();
  const themes = createMuiTheme({
    overrides: {
      MuiSvgIcon: {
        root: {
          color: "#E94348"
        }
      }
    }
  });
  const ColorButton = withStyles(theme => ({
    root: {
      color: "white",
      backgroundColor: "#E94348",
      "&:hover": {
        backgroundColor: "#E94348"
      },
      width: "100%",
      marginTop: 20
    }
  }))(Button);
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={themes}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={3}
        >
          {plansList.map(plan => (
            <Grid item md={4} xs={12} sm={12} key={plan.id}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontWeight: "bold" }}
                  >
                    {plan.pricing}
                  </Typography>
                  {plan.discount ? (
                    <Typography
                      className={classes.secondary}
                      color="textSecondary"
                      gutterBottom
                    >
                      {plan.discount}
                    </Typography>
                  ) : (
                    <CardActions style={{ color: "white" }}>
                      {"blah blah"}
                    </CardActions>
                  )}

                  <Divider variant="middle" className={classes.divider} />
                  {plan.features.map(feature => (
                    <Grid
                      key={feature}
                      container
                      direction="row"
                      alignItems="center"
                      wrap="nowrap"
                    >
                      <Grid item>
                        <CheckCircleIcon />
                      </Grid>
                      <Grid item style={{ padding: 10 }}>
                        <Typography>{feature}</Typography>
                      </Grid>
                    </Grid>
                  ))}
                  <Grid item md={12}>
                    <ColorButton
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.margin}
                      href={plan.link}
                      target="_blank"
                    >
                      buy now
                    </ColorButton>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
