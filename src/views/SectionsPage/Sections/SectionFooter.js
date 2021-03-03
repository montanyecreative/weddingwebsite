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
              <div className={classes.left}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://gatewayitconsulting.com"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Gateway IT Consulting
                </a>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
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
            <GridItem xs={12} sm={6} md={6}>
              <h5>Social Feed</h5>
              <div className={classes.socialFeed}>
                <div>
                  <i className="fab fa-twitter" />
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div>
                  <i className="fab fa-twitter" />
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div>
                  <i className="fab fa-facebook-square" />
                  <p>
                    A collection of 25 stunning sites that you can use for
                    inspiration.
                  </p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </Footer>
      </div>
    </div>
  );
}