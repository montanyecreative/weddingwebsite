import {
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  description
} from "assets/jss/material-kit-pro-react.js";
import imagesStyles from "../imagesStyles";

const whenAndWhereStyle = {
  main,
  mainRaised,
  title,
  mlAuto,
  description,
  container: {
    ...container,
    maxWidth: "970px !important"
  },
  whenAndWhereContent: {
    paddingBottom: "40px",
    paddingTop: "40px"
  },
  bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block"
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  blackBG: {
    backgroundColor: "black"
  },
  customTitle: {
    fontSize: "3rem !important"
  },
  customHotelTitle: {
    fontSize: "1.75rem !important",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    marginBottom: ".5em"
  },
  customTitle4: {
    fontSize: "3rem !important",
    marginTop: "0",
    lineHeight: "1"
  },
  websiteColor: {
    backgroundColor: "#222"
  },
  distanceChip: {
    marginTop: '30px',
    minHeight: '32px',
    display: 'flex'
  },
  ...imagesStyles
};

export default whenAndWhereStyle;
