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
        id: "1",
        nameHeader: "Emma Norling",
        fileName: "EmmaNorling.jpg",
        role: "Lecturer Role",
        welcomeMessage: "Lorem Ipsum Welcome Message"
      },
      {
          id: "2",
          nameHeader: "Guy Brown",
          fileName: "Guy-Brown.jpg",
          role: "Lecturer Role",
          welcomeMessage: "Lorem Ipsum Welcome Message"
      },
      {
          id: "3",
          nameHeader: "Jon Barker",
          fileName: "Jon-Barker1.jpg",
          role: "Lecturer Role",
          welcomeMessage: "Lorem Ipsum Welcome Message"
      },
]
const welcome_societies = [
    {
      id: "1",
      nameHeader: "Computing Society",
      fileName: "compsoc.png",
      welcomeMessage: "Lorem Ipsum Welcome Message",
      link: "https://shefcompsoc.uk/"
    },
    {
        id: "2",
        nameHeader: "HackSheffield",
        fileName: "hacksheffield.jpg",
        welcomeMessage: "Lorem Ipsum Welcome Message",
        link: "https://hacksheffield.com/"
    },
    {
        id: "3",
        nameHeader: "Women In Computer Science",
        fileName: "womenincomputerscience.jpg",
        welcomeMessage: "Lorem Ipsum Welcome Message",
        link: "https://www.sheffield.ac.uk/dcs/news/sheffield-women-computer-science-society"
    },

  ];
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    logo: {
        maxWidth: 160,
        marginLeft: "auto",
        marginTop: 5,
        marginBottom: 5
      },
  }));

class Welcome extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div style={{  }}>
        <Typography  style={{ paddingLeft: "20%", paddingRight: "20%", textAlign:"center" }} paragraph>
        Welcome to your first year of computer science!
        This website is meant to be a way to  easily find important information about how to navigate your First Year. <br/>
        Use the sections on the left to find material, or the search-bar on the top right if you can't find what you're
        looking for.
        </Typography>
        <Typography style={{textAlign:"center"}} variant="h2" paragraph>
            Welcome From Heads Of Year
        </Typography>
        <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                {welcome_people.map((value) => (
                    <Grid key={value} item>
                    <Paper style={{textAlign:"center", paddingLeft:"2%", paddingRight:"2%", paddingBottom:"2%", paddingTop:"2%"}}>
                        <Typography style={{textAlign:"center"}} variant="h5" paragraph>
                            {value.nameHeader}
                        </Typography>
                        <Typography style={{textAlign:"center"}} variant="h6" paragraph>
                            {value.role}
                        </Typography>
                      <img src={value.fileName} alt="University Of Sheffield Logo" style={{borderRadius:"100%"}} className={classes.logo}></img>
                      <Typography style={{textAlign:"center"}} paragraph>
                            {value.welcomeMessage}
                        </Typography>
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>

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

        <Typography style={{textAlign:"center"}} variant="h2" paragraph>
            Computing Societies Welcome
        </Typography>
        <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                {welcome_societies.map((value) => (
                    <Grid key={value} item>
                    <Paper style={{textAlign:"center", paddingLeft:"2%", paddingRight:"2%", paddingBottom:"2%", paddingTop:"2%"}}>
                        <Typography style={{textAlign:"center"}} variant="h6" paragraph>
                            {value.nameHeader}
                        </Typography>
                        <Typography style={{textAlign:"center"}} variant="h6" paragraph>
                            {value.role}
                        </Typography>
                      <img src={value.fileName} alt="University Of Sheffield Logo" width="100" height="100" style={{borderRadius:"100%"}} className={classes.logo}></img>
                      <br/>
                      <Link href={value.link}> Link to website</Link>
                      <br/>
                      <Typography style={{textAlign:"center"}} paragraph>
                            {value.welcomeMessage}
                        </Typography>
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(useStyles)(Welcome);
