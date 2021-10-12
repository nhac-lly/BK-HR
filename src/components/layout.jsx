import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  Badge,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            HR recruitment and management Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <DashboardIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <Link color="inherit" href="/recruitment" passhref>
              <ListItem button>
                <ListItemIcon>
                  <FaceIcon />
                </ListItemIcon>
                <ListItemText primary="Recruitment" />
              </ListItem>
            </Link>
          </div>{" "}
        </List>
        <Divider />
        <List>
          <div>
            <Link color="inherit" href="/management" passhref>
              <ListItem button>
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Management" />
              </ListItem>
            </Link>
          </div>{" "}
        </List>
        <Divider />
        <List>
          <div>
            <Link color="inherit" href="/settings" passhref>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItem>
            </Link>
          </div>{" "}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              {children}
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Layout;
