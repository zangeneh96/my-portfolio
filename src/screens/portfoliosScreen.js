import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Title from '../components/title'
import { getTranslate } from '../localization/index';
import Portfolio from '../components/portfolio'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    paddingTop: 60,
    paddingBottom: 30,
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
      paddingRight: 10,
    }
  }
}))

export default function PortfoliosScreen() {
  const classes = useStyles();
  const translate = getTranslate();

  return (
    <div className={classes.root}>
      <Title title={translate.portfolios} />
      <Grid container item xs={12} direction="row" justify="flex-start" >
        {
          translate.portfolioList.map((protfolio) => (
            <Portfolio title={protfolio.title} des={protfolio.des} image={protfolio.image} link={protfolio.link} key={protfolio.id} />
          ))
        }
      </Grid>
    </div>
  )
}
