import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { getTranslate } from '../localization/index';
import Service from '../components/service';


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: "block",
    },
  },
  aboutGrid: {
    paddingTop:30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  mainAbout: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingTop: 15,
  },
  aboutTextGrid: {
    paddingRight: 20,
    paddingLeft: 20,
    [theme.breakpoints.down('sx')]: {
      padding: 0,
      marginTop: 10,
      marginButtom: 10,
    },
  },

}))
export default function AboutScreen() {

  const translate = getTranslate();
  const classes = useStyles();

  return (
    <Grid container className={classes.root} >
      <Grid container item xs={12} className={classes.aboutGrid}>
        <Grid container className={classes.mainAbout}>
          <Grid item xs={12} md={6} style={{ height:280, paddingRight: 10, paddingLeft: 10 }} >
            <Typography variant="h3">
              {translate.hi}
              <span className={classes.nameText}>{translate.name}</span>
              {translate.hi2}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.fullName}</b>
              {' : '}
              {translate.name}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.AgeTitle}</b>
              {' : '}
              {translate.age}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.cityTitle}</b>
              {' : '}
              {translate.city}
            </Typography>
            
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.education}</b>
              {' : '}
              {translate.softwareEngineer}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.FieldOfWork}</b>
              {' : '}
              {translate.working}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.workSamples}</b>
              {' : '}
              {translate.dontHave}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 90, display: 'inline-block', }}>{translate.YearOfActivity}</b>
              {' : '}
              {translate.year}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={classes.aboutGrid}>
        <Grid container direction='row'>
          <Service title={translate.education} desc="nothing :)" />
          <Service title={translate.workingExperiance} desc="nothing :)" />
          <Service title={translate.resumeTitle} desc="nothing :)" />
        </Grid>
      </Grid>

    </Grid>

  )
}
