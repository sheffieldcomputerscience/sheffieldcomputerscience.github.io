import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import Accordion from '@material-ui/core/Accordion'
import { AccordionSummary } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import ListOfSections from "./ListOfSections";
import Welcome from "./content/Welcome";
import Footer from './Footer';
import General from './content/General';
import ComputingSkills from './content/ComputingSkills';
import AcademicSkills from './content/AcademicSkills';
import Undergraduates from './content/Undergraduates';
import Postgraduates from './content/Postgraduates';
const drawerWidth = 240;
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const mystyle = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#272F40"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: 160,
    marginLeft: "auto",
    marginTop: 5,
    marginBottom: 5
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  list_root: {
    width:'100%',
    maxWidth: 360,
  },
  nested: {
    paddingLeft:  theme.spacing(4)
  },
});
console.log(mystyle)

const linkData = [
    {
      id: "welcome_page",
      nameHeader: "Welcome Page",
      subMenu: [{ id: "staff_page", name: "Staff Welcome" }, { id: "society_page", name: "Societies Welcome" }],
      link: "/",
    },
    {
      id: "1",
      nameHeader: "General Computing Skills",
      subMenu: [{ id: "11", name: "Version Control" }, { id: "12", name: "Terminal Skills" }, 
      { id: "13", name: "Typing Skills" }],
      link: "/computing_skills",
    },
    {
      id: "2",
      nameHeader: "Academic Skills",
      subMenu: [{ id: "21", name: "Group Projects" }, { id: "22", name: "Studying and Revision" }, { id: "23", name: "Help for Students" }],
      link: '/academic_skills',
    },
    {
      id: "3",
      nameHeader: "Information for Undergraduates",
      subMenu: [{ id: "31", name: "Overview of 1st Year" }, { id: "32", name: "Maths Background" }],
      link: '/undergraduates'
    },
    {
      id: "4",
      nameHeader: "Information for Postgraduates",
      subMenu: [{ id: "41", name: "Programming Overview" }, { id: "42", name: "Self Study" }],
      link: '/postgraduates'
    },
    {
      id: "5",
      nameHeader: "General Information",
      subMenu: [{ id: "51", name: "FAQ" }, { id: "52", name: "Important Links" }],
      link: "/general"
    },
  ];
  
class MainApplication extends Component {
    // [open, setOpen] = React.useState(true);
    // open = React.useState(true);
    // setOpen = React.useState(true);
    
    state = { settings: [{ id: "welcome_page", open: true }, { id: "1", open: false }, { id: "2", open: false }, { id: "3", open: false }, { id: "4", open: false }, { id: "5", open: false }] };
    
  
    handleClick = id => {
      this.setState(state => ({
        ...state,
        settings: state.settings.map(item =>
          item.id === id ? { ...item, open: !item.open } : item
        )
      }));
    };
  
    render() {
      const { settings } = this.state;
    //   const [open, setOpen] = useState(false);
      const open=this.state.open;
      const {classes } = this.props
    //   const classes = this.props.classes
    //   const theme = this.props.theme
      // const classes = useStyles();
    //   const theme = useTheme();
      // [open, setOpen] = React.useState(true);
      const handleDrawerOpen = () => {
        this.setState({open: true});
      };
      const handleDrawerClose = () => {
        // setOpen(false);
        this.setState({open: false})
      };
      return (
        <div className={classes.root}>
        <Router>
          <div>
          <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {[classes.appBarShift]: open, })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ textAlign:"center", fontFamily: "Abel" }}>
                Sheffield Computer Science Introduction Website 
              </Typography>
              <img src="TUOS_PRIMARY_LOGO_REVERSED.png" alt="University Of Sheffield Logo" className={classes.logo}></img>
            </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                  <ChevronRightIcon/>
                {/* {classes.theme.direction == 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/> } */}
              </IconButton>
            </div>
            <Divider />
            <List component="nav" style={{ paddingTop: "0px" }}>
              {linkData.map(each => (
                <React.Fragment key={each.id}>
                  <ListItem button onClick={() => this.handleClick(each.id)}>
                    <ListItemText primary={each.nameHeader} />
                    {settings.find(item => item.id === each.id).open
                      ? <ExpandLess />
                      : <ExpandMore />}
                  </ListItem>
                  <Divider />
                  <Collapse
                    in={settings.find(item => item.id === each.id).open}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {each.subMenu.map(subData => (
                        <ListItem button key={subData.id} component={NavLink} to={each.link} >
                          <ListItemText primary={subData.name} />
                        </ListItem>
                        
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
            </Drawer>

          </div>
          <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
        <div className={classes.drawerHeader} />

          <Switch>
            <Route exact path="/">
              <Welcome/>
            </Route>
            <Route exact path='/general'>
              <General/>
            </Route>
            <Route exact path='/computing_skills'>
              <ComputingSkills/>
            </Route>
            <Route exact path='/academic_skills'>
              <AcademicSkills/>
            </Route>
            <Route exact path='/undergraduates'>
              <Undergraduates/>
            </Route>
            <Route exact path='/postgraduates'>
              <Postgraduates/>
            </Route>
          </Switch>

        <Footer/>
        </main>
        </Router>
        </div>
      );
    }
  }

  MainApplication.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(mystyle, {withTheme: true})(MainApplication);
