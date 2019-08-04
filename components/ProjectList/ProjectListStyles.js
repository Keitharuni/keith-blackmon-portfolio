import sizes from "../../styles/sizes";
export default {
  projectList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "82vw",
    marginRight: "10px",
    marginTop: "60px",
    marginLeft: "210px",
    [sizes.down("md")]: {
      width: "70vw"
    },
    [sizes.down("xs")]: {
      marginLeft: "10px",
      width: "90vw"
    }
  }
};
