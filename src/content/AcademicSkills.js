import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Link } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
const welcome_people = [
    {
        id: "emma",
        nameHeader: "Emma Norling",
        fileName: "EmmaNorling.jpg",
        role: "Lecturer Role",
        welcomeMessage: "Lorem Ipsum Welcome Message"
      },
      {
          id: "guy",
          nameHeader: "Guy Brown",
          fileName: "Guy-Brown.jpg",
          role: "Head of Department",
          welcomeMessage: "Welcome to the Department of Computer Science at the University of Sheffield! My name is Professor Guy Brown and I am the Head of Department. I’m delighted that you have chosen to join us at Sheffield and I look forward to meeting you soon.\nThe coming year will be an unusual one for all of us, as we teach and learn within the constraints created by the coronavirus pandemic. However, I am very confident that we will continue to deliver an excellent student experience, and that our reputation as a friendly and welcoming Department will continue to shine through.\nOver the next few weeks some of our teaching and support staff will be emailing you to introduce themselves and to suggest some helpful resources that will help prepare you for your arrival in Sheffield and for the start of your course.\nYou will also receive emails over the coming weeks from the University that will explain wider aspects of University life. Emails from the Department will focus on preparing you for life as a Computer Science student specifically.\nBest regards,\nProfessor Guy Brown\nHead of Department\n"      },
      {
          id: "jon",
          nameHeader: "Jon Barker",
          fileName: "Jon-Barker1.jpg",
          role: "Lecturer Role",
          welcomeMessage: "Lorem Ipsum Welcome Message"
      },
]
const welcome_societies = [
    {
      id: "compsoc",
      nameHeader: "Computing Society",
      fileName: "compsoc.png",
      welcomeMessage: "Lorem Ipsum Welcome Message",
      link: "https://shefcompsoc.uk/"
    },
    {
        id: "hacksheffield",
        nameHeader: "HackSheffield",
        fileName: "hacksheffield.jpg",
        welcomeMessage: "Lorem Ipsum Welcome Message",
        link: "https://hacksheffield.com/"
    },
    {
        id: "wics",
        nameHeader: "Women In Computer Science",
        fileName: "womenincomputerscience.jpg",
        welcomeMessage: "Lorem Ipsum Welcome Message",
        link: "https://www.sheffield.ac.uk/dcs/news/sheffield-women-computer-science-society"
    },

  ];

class Welcome extends Component {

  render() {
    return (
      <div style={{  }}>

        <Typography style={{textAlign:"center"}} variant="h2" paragraph>
            Academic Skills
        </Typography>

        <Typography style={{textAlign:"center", marginTop:"2%"}} paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>

      </div>
    );
  }
}

export default Welcome;
