import sizes from "./sizes";

export default {
  education: {
    fontFamily: "Lato",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "10px",
    marginLeft: "220px",
    height: "100%",
    [sizes.down("xs")]: {
      marginLeft: "10px"
    }
  }
};
