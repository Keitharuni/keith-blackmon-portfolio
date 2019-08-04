import React from "react";
import styles from "./ButtonsStyles";
import { withStyles } from "@material-ui/styles";

function Buttons({ title, url, toggleDetails, classes }) {
  return (
    <>
      <button className={classes.details} onClick={toggleDetails}>
        {title} Details
      </button>
      <a
        href={url}
        style={{ textDecoration: "none", color: "black" }}
        target='_blank'>
        <button className={classes.launch}>Launch {title}</button>
      </a>
    </>
  );
}

export default withStyles(styles)(Buttons);
