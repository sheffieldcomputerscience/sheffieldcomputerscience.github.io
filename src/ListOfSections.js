import React, { Component, NavLink } from "react";
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse
} from "@material-ui/core";

const myData = [
  {
    id: "1",
    nameHeader: "General Computing Skills",
    subMenu: [{ id: "11", name: "Github Tutorial (Making Back-Ups)" }, { id: "12", name: "Terminal Tutorial" }, 
    { id: "13", name: "Typing Skills Improvements" }, { id: "14", name: "What Computer Should I Buy?" }]
  },
  {
    id: "2",
    nameHeader: "Academic Skills",
    subMenu: [{ id: "21", name: "What To Expect In Your Course" }, { id: "22", name: "Group Project Advice" }, { id: "23", name: "Studying and Revision" }
            , { id: "24", name: "How not to fail an assignment" }, { id: "25", name: "Finding Past Papers" }, { id: "26", name: "Important Links and Information" }]
  },
  {
    id: "3",
    nameHeader: "Under Graduates",
    subMenu: [{ id: "31", name: "Maths Overview" }, { id: "32", name: "First Year Modules Overview" }]
  },
  {
    id: "4",
    nameHeader: "Post Graduates",
    subMenu: [{ id: "41", name: "Expected Programming Ability" }, { id: "42", name: "Expectations based on Programme" }, { id: "43", name: "Self Study" }]
  },
  {
    id: "5",
    nameHeader: "General Information",
    subMenu: [{ id: "51", name: "International Students" }, { id: "52", name: "Important Links and Information" }]
  },
];

class ListOfSections extends Component {
  state = { settings: [{ id: "1", open: false }, { id: "2", open: false }, { id: "3", open: false }, { id: "4", open: false }, { id: "5", open: false }] };

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
          {myData.map(each => (
            <React.Fragment key={each.id}>
              <ListItem button onClick={() => this.handleClick(each.id)}>
                <ListItemText inset primary={each.nameHeader} />
                <p>{each.id}</p>
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
                      <ListItemText inset primary={subData.name} />
                      <p>{subData.id}</p>
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
