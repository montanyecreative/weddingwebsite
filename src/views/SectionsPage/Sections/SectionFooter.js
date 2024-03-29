/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Footer
          theme="dark"
          content={
            <div>
              <div className="footer-brand">
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://montanyewedding.com"
                  target="_blank"
                  className={classes.aClasses}
                  title="To Montanye Wedding website"
                >
                  Montanye Wedding
                </a>{" "}
                All Rights Reserved.
              </div>
              <div className="footer-privacy-policy">
                <Link to="/privacy-policy" title="To privacy policy page">
                  Privacy Policy
                </Link>
              </div>
            </div>
          }
        >
          <GridContainer>
            <GridItem xs={12} md={6}>
              <h5>About Us</h5>
              <p>
                This website has been created by Lauren and John. Lauren used her
                design eye and John used his skills in web development to create
                this website.{" "}
              </p>
              <p>
                <b>Technology used:</b> Creative Tim Material Design theme customized
                using React, HTML5, SASS, and some 3rd parties to handle the
                heavy lifting in the backend.{" "}
              </p>
            </GridItem>
          </GridContainer>
        </Footer>
      </div>
    </div>
  );
}