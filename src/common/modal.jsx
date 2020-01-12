import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  }
}));
export default function Modal({
  handleClose,
  handleMessage,
  handleChange,
  errorText,
  error
}) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>{message}</DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            required
            onChange={e => handleChange("name", e.target.value)}
            error={error ? true : false}
            helperText={errorText}
            label="Name"
            type="name"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            required
            onChange={e => handleChange("email", e.target.value)}
            error={error ? true : false}
            helperText={errorText}
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone"
            type="phone"
            fullWidth
          />
          <FormControl fullWidth style={{ paddingTop: 20 }} variant="outlined">
            <TextField
              id="standard-multiline-static"
              onChange={e => handleChange("message", e.target.value)}
              label="Message"
              multiline
              rows="4"
              defaultValue=""
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleMessage} color="primary">
            Contact
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
