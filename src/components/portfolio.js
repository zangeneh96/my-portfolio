import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Modal } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  image: {
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      transform: "rotate(360deg)",
      transition: '1s',

    }
  },
  title: {
    textAlign: 'left',
    cursor: 'pointer',
    "& a": {
      color: '#fff',
      textDecoration: 'none',
      transition: "0.4s",
      target: 'blank',

      "&:hover": {
        transition: "0.4s",
        color: theme.palette.primary.main,
      }
    }
  },
}))

export default function Portfolio({ image, title, des, link }) {
  const classes = useStyles();

  return (
    <>
      <Grid item lg={4} sx={12} md={6} className={classes.root}>
        <img src={image} alt="ctf site image" className={classes.image} />
        <Typography varient="h5" className={classes.title}><a href={link} rel="noopener noreferrer">{title}</a></Typography>
        <Typography varient="body1">{des}</Typography>
      </Grid>

      <Modal
        // open={open}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

      </Modal>
    </>
  )
}
