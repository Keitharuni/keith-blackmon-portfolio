import sizes from "./sizes";

export default {
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginRight: "10px",
    marginLeft: "220px",
    height: "100%",
    [sizes.down("xs")]: {
      marginLeft: "10px"
    }
  }
};
