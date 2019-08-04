import sizes from "./sizes";

export default {
  interests: {
    fontFamily: "Lato",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "10px",
    marginLeft: "210px",
    height: "100%",
    [sizes.down("xs")]: {
      marginLeft: "10px"
    }
  },
  h4: {
    display: "flex",
    flexWrap: "wrap",
    fontWeight: "lighter"
  }
};
