import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { sendEmail } from "../services/dynamicFxHandler";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Links from "@material-ui/core/Link";
import clsx from "clsx";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Modal from "../common/modal";
import SnackBar from "../common/snackBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    textAlign: "center",
    padding: 30,
    backgroundColor: "#e94348"
  },
  links: {
    color: "white"
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [modal, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorText, setErrorText] = React.useState("");
  const [error, setError] = React.useState(false);
  const [typingTimeout, setTypingTimeout] = React.useState(0);
  const [snackBar, openSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const themes = createMuiTheme({
    overrides: {
      MuiSvgIcon: {
        root: {
          color: "#E94348"
        }
      }
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleMessage = async () => {
    if (valid()) {
      setOpen(false);
      try {
        await sendEmail(email, message);
        setVariant("success");
        setSnackMessage("Your message was sent!");
        openSnack(true);
      } catch {
        setVariant("error");
        setSnackMessage("Your message could not be sent. Please try again");
        openSnack(true);
      }
    } else {
      if (!name) {
        setError(true);
        setErrorText("Field is required.");
      }
      if (!email) {
        setError(true);
        setErrorText("Field is required.");
      } else {
        setError(false);
        setErrorText("");
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
    }
    if (field === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setError(false);
        setErrorText("");
        setEmail(value);
      } else {
        setError(true);
        setErrorText("Invalid Email address");
      }
    }
    if (field === "message") {
      setError(false);
      setMessage(value);
    }
  };

  const closeSnack = () => {
    openSnack(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="caption" display="block" gutterBottom>
        © 2020 DynamicFx Trade Network Inc.
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            <Links onClick={handleClickOpen}>Contact us</Links>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            |
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            <Link to="/termsconditions" target="_blank">
              Terms and Conditions
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            |
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            <Link to="/purchaserefund" target="_blank">
              Purchase and Refund Policy
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            |
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            <AnchorLink offset="100" className={classes.links} href="#faq">
              FAQ
            </AnchorLink>
          </Typography>
        </Grid>
      </Grid>
      <IconButton
        href="https://www.facebook.com/dynamicfxtrade/?ref=bookmarks"
        target="_blank"
      >
        <FacebookIcon style={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <InstagramIcon style={{ color: "white" }} />
      </IconButton>
      <IconButton href="https://t.me/dynamicfxtrade" target="_blank">
        <TelegramIcon style={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <YouTubeIcon style={{ color: "white" }} />
      </IconButton>
      {modal ? (
        <Modal
          handleClose={handleClose}
          handleMessage={handleMessage}
          handleChange={handleChange}
          errorText={errorText}
          error={error}
        />
      ) : null}
      {snackBar ? (
        <SnackBar
          variant={variant}
          message={snackMessage}
          closeSnack={closeSnack}
        />
      ) : null}
    </div>
  );
}
