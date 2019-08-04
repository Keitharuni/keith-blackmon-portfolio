import sizes from "./sizes";

export default {
  myApp: {
    display: "flex",
    [sizes.down("xs")]: {
      display: "block"
    }
  }
};
