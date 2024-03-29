import {
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  description
} from "assets/jss/material-kit-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

import buttonInput from "assets/jss/material-kit-pro-react/components/buttonStyle.js";
import dark from "assets/jss/material-kit-pro-react/components/buttonStyle.js";

const contactUsStyle = {
  main,
  mainRaised,
  title,
  mlAuto,
  description,
  ...customCheckboxRadioSwitch,
  ...buttonInput,
  ...dark,
  container: {
    ...container,
    maxWidth: "970px !important"
  },
  contactContent: {
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
  customTitle: {
    fontSize: "3rem !important",
    textAlign: "center"
  },
  label: {
    color: "#585858",
    fontSize: ".85rem"
  },
  last: {
    marginTop: "1em",
    "@media (min-width: 992px)": {
      marginTop: "0"
    }
  },
  guestFirst: {
    paddingLeft: "0",
    paddingRight: "0",
    "@media (min-width: 992px)": {
      marginTop: "0",
      paddingRight: "15px"
    }
  },
  guestLast: {
    marginTop: "1em",
    paddingLeft: "0",
    paddingRight: "0",
    "@media (min-width: 992px)": {
      marginTop: "0",
      paddingLeft: "15px"
    }
  }
};

export default contactUsStyle;
