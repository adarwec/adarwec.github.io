import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import clsx from "clsx";
import { subscribeUser } from "../services/dynamicFxHandler";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 40,
    paddingTop: 150,
    paddingBottom: 150,
    [theme.breakpoints.up("xs")]: {
      paddingTop: 50,
      paddingBottom: 50
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 50,
      paddingBottom: 50
    }
  },
  card: {
    maxWidth: 575,
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  cardContainer: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: 50
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 50
    }
  },
  title: {
    color: "black"
  },
  menuLinks: {
    color: "white",
    textDecoration: "none"
  }
}));

export default function Home() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [nameErrorText, setNameErrorText] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [typingTimeout, setTypingTimeout] = React.useState(0);
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const ColorButton = withStyles(theme => ({
    root: {
      backgroundColor: "#E94348",
      "&:hover": {
        backgroundColor: "#E94348"
      },
      width: "100%",
      marginTop: 20
    }
  }))(Button);

  const handleSubscribe = async () => {
    if (valid()) {
      try {
        setLoading(true);
        await subscribeUser(name, email, phone);
        setTimeout(() => {
          setLoading(false);
          setSubscribed(true);
        }, 1000);
      } catch {
        setSubscribed(false);
      }
    } else {
      if (!name) {
        setNameError(true);
        setNameErrorText("Field is required.");
      }
      if (!email) {
        setEmailError(true);
        setEmailErrorText("Field is required.");
      } else {
        setNameError(false);
        setEmailError(false);
        setNameErrorText("");
        setEmailErrorText("");
      }
    }
  };

  const valid = () => {
    if (!name || !email) {
      return false;
    } else {
      return true;
    }
  };
  const handleChange = (field, value) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(function() {
        handleValidate(field, value);
      }, 500)
    );
  };

  const handleValidate = (field, value) => {
    if (field === "name") {
      setName(value);
      setNameError(false);
      setNameErrorText("");
    }
    if (field === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setEmailError(false);
        setEmailErrorText("");
        setEmail(value);
      } else {
        setEmailError(true);
        setEmailErrorText("Invalid Email address");
      }
    }
    if (field === "phone") {
      setNameError(false);
      setEmailError(false);
      setNameErrorText("");
      setEmailErrorText("");
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid
          xs={12}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          spacing={4}
          md={6}
        >
          <Grid item>
            <Typography
              variant="h4"
              align="left"
              style={{
                fontWeight: "bold",
                fontFamily: "Arial Black, Gadget, sans-serif"
              }}
            >
              Forex Trading Signals
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left">
              Top performing trading signals sent to your phone daily. Countless
              years of trading experience literally in the palm of your hands.
              Maximize your profits with exclusive forex signals generated for
              members only.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.cardContainer}
          item
          xs={12}
          sm={6}
          md={6}
          justify="center"
        >
          <Card className={classes.card}>
            <CardContent>
              {subscribed ? (
                <div style={{ marginTop: 50, marginBottom: 50 }}>
                  <Typography
                    className={classes.title}
                    color="black"
                    gutterBottom
                    align="center"
                    variant="h5"
                  >
                    You have successfully subscribed! Please check your email.
                  </Typography>
                </div>
              ) : (
                <div>
                  {" "}
                  <Typography
                    className={classes.title}
                    color="black"
                    gutterBottom
                    align="center"
                    variant="h5"
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Get Access Today!
                  </Typography>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    required
                    onChange={e => handleChange("name", e.target.value)}
                    label="Name"
                    error={nameError}
                    helperText={nameErrorText}
                    type="name"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="email"
                    required
                    onChange={e => handleChange("email", e.target.value)}
                    label="Email Address"
                    error={emailError}
                    helperText={emailErrorText}
                    type="email"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="phone"
                    onChange={e => handleChange("phone", e.target.value)}
                    fullWidth
                    InputProps={{
                      className: classes.input
                    }}
                  />
                  <ColorButton
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ marginTop: 20 }}
                    onClick={handleSubscribe}
                  >
                    {loading ? (
                      <CircularProgress style={{ color: "white" }} size={24} />
                    ) : (
                      "Subscribe Now"
                    )}
                  </ColorButton>{" "}
                </div>
              )}
            </CardContent>

            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
