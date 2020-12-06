import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Typography } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { getTranslate } from '../localization/index';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    width: "100%",
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: "block",
    },
  },
  divIcons: {
    marginTop: 25,
  },
  iconButtonStyle: {
    border: "2px solid #2e344e",
    marginRight: 8,
    marginLeft: 8,
    transition: "0.5s",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transition: "1s",
    }
  },

}))


export default function HomeScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid container item justify="center" alignItems="center" xs={12} className={classes.root}>
      <Grid>
        <Typography variant="h2">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
        <Typography variant="subtitle1">{translate.description}</Typography>
        <div className={classes.divIcons}>

          <IconButton color="secondary" className={classes.iconButtonStyle}>
            <TelegramIcon />
          </IconButton>

          <IconButton color="secondary" className={classes.iconButtonStyle}>
            <LinkedInIcon />
          </IconButton>

          <IconButton color="secondary" className={classes.iconButtonStyle}>
            <InstagramIcon />
          </IconButton>

        </div>
      </Grid>
    </Grid>
  )
}
