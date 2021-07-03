import React, { Component } from "react";
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
    subMenu: [{ id: "1", name: "Github Tutorial (Making Back-Ups)" }, { id: "2", name: "Terminal Tutorial" }, 
    { id: "3", name: "Typing Skills Improvements" }, { id: "4", name: "What Computer Should I Buy?" }]
  },
  {
    id: "2",
    nameHeader: "Academic Skills",
    subMenu: [{ id: "1", name: "What To Expect In Your Course" }, { id: "2", name: "Group Project Advice" }, { id: "3", name: "Studying and Revision" }
            , { id: "4", name: "How not to fail an assignment" }, { id: "5", name: "Finding Past Papers" }, { id: "6", name: "Important Links and Information" }]
  },
  {
    id: "3",
    nameHeader: "First Years",
    subMenu: [{ id: "1", name: "Maths Overview" }, { id: "2", name: "First Year Modules Overview" }]
  },
  {
    id: "4",
    nameHeader: "Post Graduates",
    subMenu: [{ id: "1", name: "Expected Programming Ability" }, { id: "2", name: "Expectations based on Programme" }, { id: "3", name: "Self Study" }]
  },
  {
    id: "5",
    nameHeader: "General Information",
    subMenu: [{ id: "1", name: "International Students" }, { id: "2", name: "Important Links and Information" }]
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
                    <ListItem key={subData.id} button>
                      <ListItemText inset primary={subData.name} />
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
