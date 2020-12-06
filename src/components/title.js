import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "left",
    marginBottom:60,
    },
}))

export default function Title({ title }) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.title} >{title}</Typography>
    </div>
  )
}
