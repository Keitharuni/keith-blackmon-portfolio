import sizes from "./sizes";
import { secondaryColor } from "../styles/colors";

export default {
  about: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginRight: "10px",
    marginLeft: "220px",
    height: "100%",
    [sizes.down("xs")]: {
      marginLeft: "10px"
    }
  },
  name: {
    marginBottom: "-21px",
    fontFamily: "Notable",
    fontSize: "3rem",
    letterSpacing: "3px"
  },
  span: { color: `${secondaryColor}`, textShadow: "0.5px 0.5px 0.5px #000" },
  contact: {
    color: "gray",
    textShadow: "0.5px 0.5px 0.5px #000",
    fontFamily: "Exo"
  }
};
