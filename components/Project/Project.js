import React, { useState } from "react";
import ProjectDetails from "../ProjectDetails";
import styles from "./ProjectStyles";
import Buttons from "../Buttons/Buttons";
import { withStyles } from "@material-ui/styles";
import { secondaryColor, thirdColor, fourthColor } from "../../styles/colors";

function Project({ id, title, url, image, classes, projectDetails }) {
  const [details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails(!details);
  };

  if (details) {
    return (
      <div className={classes.project}>
        <a href={url} style={{ textDecoration: "none", color: `white` }}>
          <ProjectDetails projectDetails={projectDetails} />
          <h3 style={{ padding: "5px", fontFamily: "Lato" }}>{title}</h3>
        </a>
        <button
          onClick={toggleDetails}
          className={classes.projectButtonDetails}>
          Hide {title} Details
        </button>
        <a
          href={url}
          style={{ textDecoration: "none", color: "black" }}
          target='_blank'>
          <button className={classes.projectButtonLaunch}>
            Launch {title}
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div className={classes.project}>
        <a href={url} style={{ textDecoration: "none", color: "white" }}>
          <img
            style={{
              height: "150px",
              width: "200px"
            }}
            src={image}
          />
          <h3 style={{ padding: "5px", fontFamily: "Lato" }}>{title}</h3>
        </a>
        <Buttons title={title} url={url} toggleDetails={toggleDetails} />
      </div>
    );
  }
}

export default withStyles(styles)(Project);
