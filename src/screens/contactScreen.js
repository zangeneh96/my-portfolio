import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import { getTranslate } from '../localization/index';
import Title from '../components/title';
import './contact.css';
import ContactInfo from '../components/contactInfo';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  contactGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5,
    }
  },
  detailsGrid: {
    padding: 5,
  },
  iconStyle: {
    fontSize: 30,
    color: theme.palette.primary.main,
  }
}))

export default function ContactScreen() {

  const translate = getTranslate();
  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignItems="flex-start">
      <Grid container item xs={12} className={classes.contactGrid}>
        <Title title={translate.contactMe} />
        <Grid container direction="row">
          <Grid item xs="12" md="6" className={classes.detailsGrid}>
            <ContactInfo icon={<PhoneIcon className={classes.iconStyle} />} title={translate.phone} text1="09929580812" text2="" />
            <ContactInfo icon={<EmailIcon className={classes.iconStyle} />} title={translate.email} text1="parvin.zangeneh1995@gmail.com" text2="" />
            <ContactInfo icon={<AddIcon className={classes.iconStyle} />} title={translate.address} text1="kermanshah" text2="Iran" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}
