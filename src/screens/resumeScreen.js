import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import Skill from '../components/skill';
import { Grid, Typography, } from '@material-ui/core';
import MyStepper from '../components/MyStepper';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },

  skillGrid: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    }
  },
  skillSecondtitle: {
    marginLeft: 10,
  },
  skillFirsttitle:{
    marginTop:20,
  }

}))
export default function ResumeScreen() {

  const translate = getTranslate();
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid container item xs={12} className={classes.skillGrid}>
        <Title title={translate.resumeTitle} />
        <Grid container direction='row' >
          <Grid item xs={12} md={6}>
            <Skill title="Html5" value={80} />
            <Skill title="Java Script" value={60} />
            <Skill title="React js" value={60} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skill title="React Native" value={0} />
            <Skill title="PHP" value={70} />
          </Grid>
        </Grid>
      </Grid>


      <Grid container item xs={12} className={classes.skillGrid}>
        <Title title={translate.resume} />
        <Grid container direction='row' alignItems="center" justify="flex-start" className={classes.skillFirsttitle}>
          <WorkIcon style={{ fontSize: "20" }} />
          <Typography variant="h6" className={classes.skillSecondtitle}>
            {translate.education}
          </Typography>
        </Grid>
        <Grid container direction='row' style={{ marginTop: 15, marginBottom: 15 }}>
          <MyStepper steps={translate.educationSteps} />
        </Grid>


        <Grid container direction='row' alignItems="center" justify="flex-start" className={classes.skillFirsttitle}>
          <WorkIcon style={{ fontSize: "20" }} />
          <Typography variant="h6" className={classes.skillSecondtitle}>
            {translate.workingExperiance}
          </Typography>
        </Grid>
        <Grid container direction='row' style={{ marginTop: 15, marginBottom: 15 }}>
          <MyStepper steps={translate.workingExperianceSteps} />
        </Grid>

      </Grid>
    </Grid>

  )
}
