import { defaultFont } from "assets/jss/material-kit-pro-react";
import {
  container,
  mlAuto,
  mrAuto,
  title,
  link,
  cardTitle,
  description,
  coloredShadow,
  whiteColor,
  sectionDark,
  hexToRgb,
  borderRight,
  imageCenter,
} from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";

const saveTheDateStyle = {
  ...tooltipsStyle,
  container,
  mlAuto,
  mrAuto,
  title,
  link,
  description,
  coloredShadow,
  cardTitle,
  borderRight,
  imageCenter,
  textCenter: {
    textAlign: "center"
  },
  saveTheDate: {
    padding: "80px 0"
  },
  tabSpace: {
    padding: "20px 0 50px 0px"
  },
  bigIcons: {
    "& a": {
      margin: 0,
      width: "100% !important",
      paddingTop: "45px",
      paddingBottom: "45px"
    },
    "& button i.fab, & a i.fab": {
      fontSize: "25px !important",
      lineHeight: "90px !important"
    }
  },
  cardCategory: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important",
    marginTop: "10px"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + "  !important",
    marginTop: "10px !important"
  },
  cardDescription: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important"
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  socialLine: {
    padding: ".9375rem 0px"
  },
  marginTop20: {
    marginTop: "20px"
  },
  card2: {
    textAlign: "center"
  },
  sectionDark: {
    ...sectionDark,
    backgroundSize: "550% 450%",
    "& $title, & $cardTitle": {
      color: whiteColor
    },
    "& $cardCategory": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.5) !important"
    },
    "& $cardDescription": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76) !important"
    }
  },
  projects3: {
    "& h6": {
      marginBottom: "5px"
    }
  },
  card4: {
    marginTop: "0",
    marginBottom: "0",
    "& $cardTitle": {
      color: whiteColor
    }
  },
  cardBody4: {
    paddingTop: "140px",
    paddingBottom: "140px"
  },
  info4: {
    padding: "0"
  },
  projects4: {
    "& hr": {
      margin: "70px auto",
      maxWidth: "970px"
    }
  },
  customTitle: {
    ...defaultFont,
    fontSize: "1.25em"
  },
  branchCustomGraphic: {
    width: "55%",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-width: 768px)": {
      width: "23%"
    }
  }
};

export default saveTheDateStyle;
