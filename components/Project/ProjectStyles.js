import sizes from "../../styles/sizes";
import { mainColor, thirdColor, fourthColor } from "../../styles/colors";

export default {
  project: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "200px",
    backgroundColor: `${mainColor}`,
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3)",
    boxShadow: "0 15px 12px rgba(0, 0, 0, 0.1)",
    boxShadow: `inset 0 0 25px ${thirdColor}`,
    border: "1px solid grey",
    height: "275px",
    padding: "10px",
    margin: "22px",
    borderRadius: "5px",
    alignItems: "center",
    alignContent: "center",
    transform: "translateZ(0)",
    transition: "transform 0.25s ease-out",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  projectButtonDetails: {
    backgroundColor: `${thirdColor}`,
    borderRadius: "5px",
    border: "none",
    boxShadow: "2px 2px 2px rgb(0,0,0)",
    marginBottom: "10px",
    color: "white",
    "&:hover": {
      cursor: "pointer"
    }
  },
  projectButtonLaunch: {
    backgroundColor: `${fourthColor}`,
    borderRadius: "5px",
    border: "none",
    color: "white",
    boxShadow: "2px 2px 2px rgb(0,0,0)",
    "&:hover": {
      cursor: "pointer"
    }
  }
};
