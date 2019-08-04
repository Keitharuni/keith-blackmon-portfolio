import {
  mainColor,
  secondaryColor,
  thirdColor,
  fourthColor
} from "../../styles/colors";

export default {
  details: {
    backgroundColor: `${thirdColor}`,
    borderRadius: "5px",
    border: "none",
    boxShadow: "4px 4px 9px rgba(0,0,0,0.9)",
    marginBottom: "10px",
    color: "white",
    "&:hover": {
      cursor: "pointer"
    }
  },
  launch: {
    backgroundColor: `${fourthColor}`,
    borderRadius: "5px",
    color: "white",
    border: "none",
    boxShadow: "4px 4px 9px rgba(0, 0, 0, 0.9)",
    "&:hover": {
      cursor: "pointer"
    }
  }
};
