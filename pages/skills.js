import React from "react";
import FontAwesomeIcons from "../components/FontAwesomeIcons";
import {
  faHtml5,
  faGit,
  faReact,
  faNodeJs,
  faJs,
  faNpm,
  faCss3Alt,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/skillsStyles";
import { withStyles } from "@material-ui/styles";

const icons = [
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faNpm,
  faGit
];

function skills({ classes }) {
  return (
    <div className={classes.skillsContainer}>
      <h1
        style={{
          fontFamily: "Oswald",
          marginBottom: "-10px"
        }}>
        SKILLS
      </h1>
      <h3
        style={{
          fontFamily: "Lato",
          fontWeight: "lighter",
          letterSpacing: "-0.2px"
        }}>
        PROGRAMMING LANGUAGES & TOOLS
      </h3>

      <div>
        <FontAwesomeIcons icons={icons} />
      </div>
    </div>
  );
}

export default withStyles(styles)(skills);
