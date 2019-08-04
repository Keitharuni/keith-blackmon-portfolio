import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/aboutStyles";
import { withStyles } from "@material-ui/styles";
import { secondaryColor } from "../styles/colors";

const iconStyles = {
  display: "flex",
  backgroundColor: "black",
  padding: "10px",
  borderRadius: "50%",
  color: "white",
  width: "20px",
  height: "20px"
};
const linkedIn = (
  <a
    target='_blank'
    href='https://www.linkedin.com/in/blackmonkeith/'
    style={{ cursor: "pointer" }}>
    <FontAwesomeIcon style={iconStyles} icon={faLinkedinIn} size={"2x"} />
  </a>
);
const gitHub = (
  <a
    target='_blank'
    href='https://github.com/Keitharuni'
    style={{ cursor: "pointer" }}>
    {" "}
    <FontAwesomeIcon style={iconStyles} icon={faGithub} size={"2x"} />
  </a>
);

const Index = ({ classes }) => {
  return (
    <div className={classes.about}>
      <h1 className={classes.name}>
        Keith <span className={classes.span}>Blackmon</span>
      </h1>
      <h3 className={classes.contact}>
        (805) 910-6347 •
        <span style={{ color: `${secondaryColor}` }}>
          {" "}
          BLACKMONKEITH@GMAIL.COM
        </span>
      </h3>
      <p style={{ fontFamily: "Lato" }}>
        I am a self taught Front-end Web Developer with a love for JavaScript
        and React. Being a self taught Front-end Web Developer I am very
        motivated and excited to take my skills and apply it towards meaningful
        projects.
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>{linkedIn}</div>
        <div>{gitHub}</div>
      </div>

      {/* place linkedIn icon, and GitHub Icon here */}
    </div>
  );
};
export default withStyles(styles)(Index);
