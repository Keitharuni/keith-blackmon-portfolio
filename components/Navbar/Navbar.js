import Link from "next/link";
import ResponsiveMenu from "react-responsive-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavbarStyles";
import { withStyles } from "@material-ui/styles";

const Navbar = ({ classes }) => {
  return (
    <ResponsiveMenu
      menuOpenButton={
        <div className={classes.smallContainer}>
          <h3 className={classes.name}>Keith Blackmon</h3>
          <FontAwesomeIcon className={classes.icon} icon={faBars} />
        </div>
      }
      menuCloseButton={
        <div className={classes.smallContainer}>
          <h3 className={classes.name}>Keith Blackmon</h3>
          <FontAwesomeIcon className={classes.icon} icon={faBars} />
        </div>
      }
      changeMenuOn='575.98px'
      largeMenuClassName={classes.largeMenu}
      smallMenuClassName={classes.smallMenu}
      menu={
        <div className={classes.navbar}>
          <Link href='/'>
            <a>
              <img src='../../static/Me.jpg' className={classes.navImg} />
            </a>
          </Link>
          <Link href='/'>
            <a className={classes.navLink}>About</a>
          </Link>
          <Link href='/projects'>
            <a className={classes.navLink}>Projects</a>
          </Link>
          <Link href='/skills'>
            <a className={classes.navLink}>Skills</a>
          </Link>
          <Link href='/education'>
            <a className={classes.navLink}>Education</a>
          </Link>
          <Link href='/experience'>
            <a className={classes.navLink}>Experience</a>
          </Link>
          <Link href='/interests'>
            <a className={classes.navLink}>Interests</a>
          </Link>
        </div>
      }
    />
  );
};

export default withStyles(styles)(Navbar);
