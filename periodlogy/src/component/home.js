import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      margin: theme.spacing.unit*2,
      backgroundColor: "#f37474",
      maxWidth: "364px",
      [theme.breakpoints.down('sm')]:{
        width: "100%"
      },
    },
    question: {
        fontWeight: "bold",
        fontFamily: "'Patua One', cursive",
        color:"rgba(97, 22, 17, 0.87)"
    },
    description: {
        fontFamily: "'Gochi Hand', cursive",
        fontSize: "21px",
        padding: theme.spacing.unit * 2,
    },
    margin: {
        margin: theme.spacing.unit*2,
        float: "right"
      },
    heading:{
        textAlign:"center",
        fontSize: "64px",
        fontFamily: "'Spicy Rice', cursive",
        color:"rgba(142, 26, 19, 0.87)",
          [theme.breakpoints.down('xs')]:{
            fontSize: "44px",
          }

      },
    button:{
        color: "#801b3f",
        border: "1px solid #a00b0b",
    }
  });

class Home extends Component {
    state={
        data:[]
    }
    
    componentDidMount() {
        fetch('http://127.0.0.1:4000/get_new_question', {method:'GET', headers: new Headers()})
            .then(response => response.json())
            .then(resp => this.setState({ data: resp.questionList }));
    }

  render() {
    console.log(this.state)
    const { classes } = this.props;
    const {data} = this.state;
    return (
        <div>
            <Typography variant="h5" component="h3" className={classes.heading}>
                    PeriodioLogy
            </Typography>
            <Fab color="secondary" aria-label="Add" className={classes.margin} onClick={this.props.openAddPage}>
                <AddIcon />
            </Fab>
            <Grid container justify="center">
            {
                data.map((periodData, i)=>{
                    return(<Paper className={classes.root} elevation={1} key={i}>
                                <Typography variant="h5" component="h3" className={classes.question}>
                                    {periodData.question}
                                </Typography>
                                <Typography component="p" className={classes.description}>
                                    {periodData.des}
                                </Typography>
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                <a href={periodData.url.video}>
                                    Watch video
                                </a>
                                </Button>
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                <a href={periodData.url.article}>
                                    Read articles
                                </a>
                                </Button>
                            </Paper>)
                    })
            }
            </Grid>
        </div>
    );
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
