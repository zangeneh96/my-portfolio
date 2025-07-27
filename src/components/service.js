import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
  root: {
    paddingRight:theme.spacing(4),
    paddingLeft: theme.spacing(4),
    marginTop:20,
  },
  main: {
    height:300,
    zIndex: 1,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    backgroundColor: '#191d2b',
    padding: theme.spacing(8),
    '&:hover': {
      borderTopColor: theme.palette.primary.main
    },

  },

  title: {
    marginTop: 15,
    paddingBottom: 15,
    position: 'relative',
  },
  desc: {
    marginTop: 15,
  },
}))
export default function Service({ title, desc }) {
  const classes = useStyle();
  return (
    <Grid item lg={4} xs={12} md={6} className={classes.root} >
      <Grid container direction="column" className={classes.main} alignItems="flex-start">
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <Typography variant="body1" className={classes.desc}>
          {desc}
        </Typography>
      </Grid>
    </Grid>
  )
}
