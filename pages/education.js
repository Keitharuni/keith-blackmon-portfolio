import React from "react";
import styles from "../styles/educationStyles";
import { withStyles } from "@material-ui/styles";
import { secondaryColor } from "../styles/colors";

function education({ classes }) {
  return (
    <div className={classes.education}>
      <h1 style={{ fontFamily: "Oswald", marginBottom: "-5px" }}>EDUCATION</h1>
      <h2
        style={{
          marginBottom: "-10px",
          marginTop: "30px",
          textDecorationLine: "underline",
          textDecorationColor: `${secondaryColor}`
        }}>
        University of California, San Diego
      </h2>
      <h3>B.S. - Geology | 2011</h3>
    </div>
  );
}

export default withStyles(styles)(education);
