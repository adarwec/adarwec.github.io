import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Tooltip from "@material-ui/core/Tooltip";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    color: "white"
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
    [theme.breakpoints.up("xl")]: {
      display: "none"
    }
  },
  menuLinks: {
    color: "white",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "none"
    },

    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "block"
    },
    [theme.breakpoints.up("lg")]: {
      display: "block"
    },
    [theme.breakpoints.up("xl")]: {
      display: "block"
    }
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("xs")]: {
      position: "relative"
    },
    [theme.breakpoints.up("sm")]: {
      display: "relative"
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  listItems: {
    textDecoration: "none",
    color: "black"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const options = [
  {
    label: "Fx University",
    link: "https://www.dailyfx.com/forex-education"
  },
  {
    label: "Trading Guides",
    link: "https://www.dailyfx.com/free-trading-guides"
  },
  {
    label: "Myfxbook",
    link:
      "https://www.myfxbook.com/members/Pay10/fury-live-account-forexcom/2716911"
  }
];

export default function Navigator() {
  const classes = useStyles();
  const [scroll, setScroll] = React.useState(true);
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < document.body.clientHeight - 80;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        elevation4: {
          boxShadow: "none"
        }
      },
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: "transparent"
        }
      },
      MuiButton: {
        outlined: {
          border: "1px solid rgba(255, 255, 255, 0.95)"
        }
      }
    }
  });
  const [open, setOpen] = React.useState(false);
  const [openDrop, setOpenDrop] = React.useState(false);
  const [openNested, setopenNested] = React.useState(false);
  // const [openDrawer, setopenNested] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index);
    window.open(option.link);
    setOpenDrop(false);
  };

  const handleToggle = event => {
    setOpenDrop(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenDrop(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const hideBar = () => {
    setOpen(false);
  };
  const handleClickNested = () => {
    setopenNested(!openNested);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: scroll ? "#363636" : "#E94348",
            transition: "background-color 1s ease",
            boxShadow: "none"
          }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Typography className={classes.title}>
              <AnchorLink href="#home">
                {scroll ? (
                  <img src="images/dynamicfx1.png"></img>
                ) : (
                  <img src="images/dynamicfx2.png"></img>
                )}
              </AnchorLink>
            </Typography>
            <Tooltip title="How it works" aria-label="works">
              <Button>
                <AnchorLink
                  offset="50"
                  className={clsx(classes.menuLinks)}
                  href="#works"
                >
                  How it Works
                </AnchorLink>
              </Button>
            </Tooltip>
            <Tooltip title="Open FX Account" aria-label="account">
              <Button
                href="https://www.tradersway.com/?ib=1294508"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
                className={clsx(classes.menuLinks)}
              >
                Open FX Account
              </Button>
            </Tooltip>
            <Tooltip title="Education" aria-label="education">
              <Button
                aria-controls={openDrop ? "split-button-menu" : undefined}
                aria-expanded={openDrop ? "true" : undefined}
                style={{ textDecoration: "none", color: "white" }}
                className={clsx(classes.menuLinks)}
                ref={anchorRef}
                aria-label="split button"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                Education<i className="arrow down"></i>
              </Button>
            </Tooltip>
            <Popper
              open={openDrop}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option.label}
                            selected={index === selectedIndex}
                            onClick={event =>
                              handleMenuItemClick(event, index, option)
                            }
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>

            <Tooltip title="Results" aria-label="results">
              <Button
                href="https://t.me/s/dynamicfxtrade"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
                className={clsx(classes.menuLinks)}
              >
                Results
              </Button>
            </Tooltip>
            <Tooltip title="MT4 WEB TERMINAL" aria-label="mt4">
              <Button
                href="https://www.tradersway.com/webtrader.html"
                target="_blank"
                variant="outlined"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: 20,
                  border: "solid 1px #d8dde3"
                }}
                className={clsx(classes.menuLinks)}
              >
                MT4 WEB TERMINAL
              </Button>
            </Tooltip>
            <Tooltip title="Buy Signals" aria-label="buy">
              <Button
                style={{
                  textDecoration: "none",
                  backgroundColor: scroll ? "#E94348" : "#363636",
                  color: "white",
                  marginLeft: 20
                }}
                className={clsx(classes.menuLinks)}
              >
                <AnchorLink
                  offset="25"
                  className={clsx(classes.menuLinks)}
                  href="#plans"
                >
                  Buy Signals
                </AnchorLink>
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => hideBar()}>
            <AnchorLink className={classes.listItems} href="#home">
              <ListItemText primary="Home" />
            </AnchorLink>
          </ListItem>
          <ListItem button onClick={() => hideBar()}>
            <AnchorLink className={classes.listItems} href="#about">
              <ListItemText primary="About" />
            </AnchorLink>
          </ListItem>
          <ListItem button onClick={() => hideBar()}>
            <AnchorLink className={classes.listItems} href="#about">
              <ListItemText primary="Services" />
            </AnchorLink>
          </ListItem>
          <ListItem button onClick={() => hideBar()}>
            <AnchorLink className={classes.listItems} href="#works">
              <ListItemText primary="How it works" />
            </AnchorLink>
          </ListItem>
          <ListItem button onClick={() => hideBar()}>
            <a
              className={classes.listItems}
              href="https://www.tradersway.com/?ib=1294508"
              target="_blank"
            >
              <ListItemText primary="Open FX Account" />
            </a>
          </ListItem>
          <ListItem button onClick={handleClickNested}>
            <ListItemText primary="Education" />
            {openNested ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openNested} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {options.map((option, index) => (
                <ListItem
                  button
                  key={index}
                  className={classes.nested}
                  onClick={() => hideBar()}
                >
                  <ListItemLink href={option.link} target="_blank">
                    <ListItemText primary={option.label} />
                  </ListItemLink>
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem button onClick={() => hideBar()}>
            <a
              className={classes.listItems}
              target="_blank"
              href="https://t.me/s/dynamicfxtrade"
            >
              <ListItemText primary="Results" />
            </a>
          </ListItem>
        </List>
      </Drawer>{" "}
    </div>
  );
}
