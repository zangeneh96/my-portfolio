import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 10,
  },
  main: {
    zIndex: 1,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    backgroundColor: '#191d2b',
    padding: theme.spacing(8),
    '&:hover': {
      borderTopColor: theme.palette.primary.main
    },
  },
  iconDiv: {
    margin: 10,
    padding: 10,
    border: '1px solid #2e344e',
    marginRight: 25,
  },
  title: {
    textAlign: 'left',
  },
  desc: {
    cursor: 'pointer',
    transition:'1s',
    '&:hover': {
      color: theme.palette.primary.main,
      transition:'1s',
    }
  },
  divDetail: {
    display: 'flex',
    zIndex: 1,
    flexDirection: 'column'
  }
}))

export default function ContactInfo({ icon, title, text1, text2 }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.main}
        direction="row" alignItems="center"
        justify="flex-start"
      >
        <div className={classes.iconDiv}>
          {icon}
        </div>
        <div className={classes.divDetail}>
          <Typography variant="h6" className={classes.title} >{title}</Typography>
          <Typography variant="body1" className={classes.desc} >{text1}</Typography>
          <Typography variant="body1" className={classes.desc} >{text2}</Typography>
        </div>
      </Grid>
    </div>
  )
}
