/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href="/#toTop"
          aria-label="Scroll to top of page"
          className={classes.navLink}
          color="transparent"
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#saveTheDate"
          aria-label="Scroll to Save the Date section"
          className={classes.navLink}
          color="transparent"
        >
          When &amp; Where
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/faqs"} className={classes.navLinkCustom}>
          <Button
            aria-label="Navigate to FAQs page"
            className={classes.navLink}
            color="transparent"
          >
            What to Expect
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/rsvp"} className={classes.navLinkCustom}>
          <Button
            aria-label="Navigate to RSVP page"
            className={classes.navLink}
            color="transparent"
          >
            RSVP
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/404"} className={classes.navLinkCustom}>
          <Button
            aria-label="Navigate to 404 page"
            className={classes.navLink}
            color="transparent"
          >
            404 Test
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
