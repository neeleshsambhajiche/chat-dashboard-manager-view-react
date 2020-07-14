import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import PropTypes from "prop-types";
import React from "react";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  image: {
    width: `calc(100%)`,
    height: `calc(100%)`,
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, imageName } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const url = "http://127.0.0.1:5000/image?imageName=" + imageName;

  return (
    <Dialog onClose={handleClose} aria-labelledby={imageName} open={open}>
      <img src={url} alt="new" className={classes.image} />
      {/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const { imageName } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button> */}
      <ImageIcon onClick={handleClickOpen} />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        imageName={imageName}
      />
    </div>
  );
}
