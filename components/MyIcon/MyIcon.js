import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/styles";
import styles from "./MyIconStyles";
import { mainColor, secondaryColor } from "../../styles/colors";

function MyIcon({ setSelectedIndex, selectedIndex, iconIndex, icon, classes }) {
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (selectedIndex === iconIndex) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [selectedIndex]);

  const handleClick = () => {
    setSelectedIndex(iconIndex);
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      style={{ color: color ? `${secondaryColor}` : "gray" }}
      className={classes.myIcon}
      icon={icon}
      size='2x'
    />
  );
}

export default withStyles(styles)(MyIcon);
