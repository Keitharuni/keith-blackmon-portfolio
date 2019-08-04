import React, { useState } from "react";
import MyIcon from "../components/MyIcon/MyIcon";

export default function FontAwesomeIcons({ icons }) {
  const [selectedIndex, setSelectedIndex] = useState({});
  return icons.map((icon, iconIndex) => {
    return (
      <MyIcon
        key={iconIndex}
        icon={icon}
        selectedIndex={selectedIndex}
        iconIndex={iconIndex}
        setSelectedIndex={setSelectedIndex}
        size='2x'
      />
    );
  });
}
