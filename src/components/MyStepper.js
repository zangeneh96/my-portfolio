import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepConnector from '@material-ui/core/StepConnector';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  StepConnector: {
    paddingBottom: 0,
    "& span": {
      borderLeft: "3px solid #2e344e",
    }
  },
  StepContent: {
    marginTop: 0,
    borderLeft: "3px solid #2e344e",
  },
  circule: {
    width: 16,
    height: 16,
    border: '5px solid #2e344e',
    borderRadius: 8,
    marginLeft: 6,
  },

  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    stepper:{
      [theme.breakpoints.down('xs')]:{
        paddingLeft:0,
        paddingRight:0,
      },
    }
  },
  title: {
    marginLeft: 10,
    color: theme.palette.primary.main,
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: 'gray',
  },
  date: {
    width: 170,
    textAlign:'left',
  }
}));



export default function MyStepper({steps}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper 
      className={classes.stepper}
      connector={<StepConnector className={classes.StepConnector} />} style={{ backgroundColor: "transparent" }} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.id} active={true}>
            <StepLabel
              classes={{ label: classes.label }}
              icon={<span className={classes.circule} />}>
              <Typography className={classes.date} variant="h6">{step.date}</Typography>
              <span className={classes.line}></span>
              <Typography className={classes.title} variant="h6">{step.title}</Typography>
            </StepLabel>
            <StepContent className={classes.StepContent}>
              <div style={{width:"240px"}}></div>
              <Typography>{step.content}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
