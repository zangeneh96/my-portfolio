import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  progressDiv: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  progress: {
    width: '100%',
    marginTop: 10,
    height: 6,
    backgroundColor: '#2e344e',
  },
  valueText: {
    padding: 4,
  },
}))

export default function Skill({ value, title }) {
  const classes = useStyles();
  const [val, setVal] = useState(0);

  useEffect(() => {
    setVal(value)
  }, []) 


  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <div className={classes.progressDiv}>
        <Typography variant="body1" className={classes.valueText}>{value}%</Typography>
        <LinearProgress value={val} variant="determinate" color="primary" className={classes.progress}></LinearProgress>
      </div>
    </div>
  )
}
