import React, { Component, NavLink } from "react";
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Divider,
  Collapse
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
const linkData = [
  {
    id: "welcome_page",
    nameHeader: "Welcome Page",
    subMenu: [{ id: "staff_page", name: "Staff Welcome" }, { id: "society_page", name: "Societies Welcome" }],
    link: "/welcome",
  },
  {
    id: "1",
    nameHeader: "General Computing Skills",
    subMenu: [{ id: "11", name: "Version Control" }, { id: "12", name: "Terminal Skills" }, 
    { id: "13", name: "Typing Skills" }],
    link: "/computingskills",
  },
  {
    id: "2",
    nameHeader: "Academic Skills",
    subMenu: [{ id: "21", name: "Group Projects" }, { id: "22", name: "Studying and Revision" }, { id: "23", name: "Help for Students" }],
    link: '/skills',
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

class ListOfSections extends Component {
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
    return (
        <div style={{  }}>
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
                      <ListItem button key={subData.id} component={NavLink} to='/dashboard' >
                        <ListItemText primary={subData.name} />
                      </ListItem>
                      
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </div>
    );
  }
}
export default ListOfSections;
