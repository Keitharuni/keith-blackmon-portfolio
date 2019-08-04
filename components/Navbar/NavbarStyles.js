import sizes from "../../styles/sizes";
import {
  mainColor,
  secondaryColor,
  thirdColor,
  fourthColor
} from "../../styles/colors";

export default {
  navbar: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: `${secondaryColor}`,
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    padding: "0rem 3rem",
    height: "100%",
    width: "100px",
    [sizes.down("xs")]: {
      height: "150px",
      width: "100%",
      padding: 0,
      position: "relative"
    }
  },
  icon: {
    display: "none",
    [sizes.down("xs")]: {
      display: "flex",
      float: "right",
      marginRight: "10px",
      marginTop: "6px",
      color: "white"
    }
  },
  navLink: {
    padding: "10px",
    fontFamily: "Exo",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "white",
    textDecoration: "none",
    letterSpacing: "2px",
    textAlign: "center",
    [sizes.down("xs")]: {
      fontSize: "10px",
      fontWeight: "100",
      marginBottom: "-10px"
    }
  },
  smallContainer: {
    backgroundColor: `${secondaryColor}`,
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
    height: "30px"
  },

  navImg: {
    height: "125px",
    width: "125px",
    borderRadius: "50%",
    border: "5px solid #1c1c1c",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.2)",
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  name: {
    marginTop: 0,
    marginLeft: "6px",
    float: "left",
    display: "flex",
    color: "white",
    fontFamily: "Oswald",
    letterSpacing: "3px"
  }
};
