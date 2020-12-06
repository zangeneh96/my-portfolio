import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import { getDirection, getFont } from '../localization/index';


let theme=createMuiTheme() 
theme = createMuiTheme({
  palette: palette,
  direction: getDirection(),
  spacing: 2.5,
  typography: {
    h1: {
      fontWeight: 700,
      lineHeight: "4rem",
      fontSize: getDirection() === "rtl" ? 50 : 52,
      fontFamily: getFont(),
      color: "#fff",
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 40 : 42,
      }
    },
    h2: {
      fontWeight: 700,
      lineHeight: "3.2857rem",
      fontSize: getDirection() === "rtl" ? 39 : 41,
      fontFamily: getFont(),
      color: "#fff",
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 32 : 34,
      }
    },
    h3: {
      fontWeight: 400,
      lineHeight: "2.7rem",
      fontSize: getDirection() === "rtl" ? 30 : 32,
      fontFamily: getFont(),
      textAlign: 'left',
      color: "#fff",
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 28 : 30,
      }
    },
    h4: {
      fontWeight: 600,
      lineHeight: "2.43rem",
      fontSize: getDirection() === "rtl" ? 26 : 28,
      fontFamily: getFont(),
      color: "white",
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 22 : 24,
      }
    },
    h5: {
      fontWeight: 600,
      lineHeight: "2.14rem",
      fontSize: getDirection() === "rtl" ? 21 : 23,
      fontFamily: getFont(),
      color: '#fff',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 18 : 20,
      }
    },
    h6: {
      fontWeight: 300,
      lineHeight: "1.857rem",
      fontSize: getDirection() === "rtl" ? 16 : 18,
      fontFamily: getFont(),
      color: "#fff",
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 14 : 16,
      }
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: "2rem",
      fontSize: getDirection() === "rtl" ? 18 : 20,
      fontFamily: getFont(),
      marginTop: 15,
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 15 : 17,
      }
    },
    body1: {
      fontWeight: 400,
      lineHeight: "1.8rem",
      fontSize: getDirection() === "rtl" ? 16 : 18,
      color: "#a4acc4",
      fontFamily: getFont(),
      textAlign: getDirection() === "rtl" ? 'justify' : 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 13 : 15,
      }
    },
    body2: {
      fontWeight: 600,
      fontSize: getDirection() === "rtl" ? 13 : 15,
      color: "#a4acc4",
      fontFamily: getFont(),
      letterSpacing: 1,
      textAlign: "center",
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 11 : 13,
      }
    },
    button: {
      fontWeight: 400,
      fontSize: getDirection() === "rtl" ? 12 : 14,
      color: "#fff",
      fontFamily: getFont(),
      letterSpacing: 2,
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === "rtl" ? 11 : 14,
      }
    }
  }
})
export default theme