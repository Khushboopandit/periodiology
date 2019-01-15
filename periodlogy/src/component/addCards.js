import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth:  "800px",
        marginLeft: theme.spacing.unit*60,
        [theme.breakpoints.down('md')]:{
            marginLeft: theme.spacing.unit*0,
            width: "90%"
          },
          [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing.unit*0,
            width: "100%"
          },
          [theme.breakpoints.down('xs')]:{
            marginLeft: theme.spacing.unit*2,
            width: "90%"
          }

      },
      margin: {
        margin: theme.spacing.unit*2,
        
      },
      textField: {
        flexBasis: 200,
      },

      chatagiri:{
        fontFamily: "'Chela One', cursive",
        fontSize: "34px",
        [theme.breakpoints.down('md')]:{
            fontSize: "30px"
          },
          [theme.breakpoints.down('sm')]:{
            fontSize: "20px"
          },
          [theme.breakpoints.down('xs')]:{
            fontSize: "18px"
          }
      },
      blankInp:{
          heigth:"43px",
          fontFamily: "'Chela One', cursive",
          color: "#821515",
      },
      media: {
          float: "right",
          [theme.breakpoints.down('md')]:{
            width: "70%",
          },
          [theme.breakpoints.down('sm')]:{
            width: "90%",
          },
          [theme.breakpoints.down('xs')]:{
            width: "70%",
          }
      },
      btn: {
          marginTop: theme.spacing.unit*2,
        [theme.breakpoints.down('xs')]:{
            width: "30%",
            padding: theme.spacing.unit-8
          }
      }
  });

class AddCrads extends Component {

  render() {
    const { classes ,question,description,video,article} = this.props;
    return (
        <div>
            <div className={classes.root}>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="ques" className={classes.chatagiri}>Question</InputLabel>
                    <Input
                        id="ques"
                        className={classes.blankInp}
                        value={question}
                        onChange={this.props.handleChange}
                        
                    />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="des" className={classes.chatagiri}>Description</InputLabel>
                    <Input
                        id="des"
                        className={classes.blankInp}
                        value={description}
                        onChange={this.props.handleChange}
                        
                    />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="video" className={classes.chatagiri}>Video Link</InputLabel>
                    <Input
                        id="video"
                        className={classes.blankInp}
                        value={video}
                        onChange={this.props.handleChange}
                        
                    />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="article" className={classes.chatagiri}>Artical Link</InputLabel>
                    <Input
                        id="article"
                        className={classes.blankInp}
                        value={article}
                        onChange={this.props.handleChange}
                        
                    />
                </FormControl> 
                <Button variant="contained" color="secondary" className={classes.btn} onClick={this.props.postPeriodData}>
                    Post
                </Button>
        </div>
         <img src="./sun.gif" className={classes.media}/>
      </div>
    );
  }
}

AddCrads.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AddCrads);
