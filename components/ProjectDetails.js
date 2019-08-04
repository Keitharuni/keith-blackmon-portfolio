import React from "react";

const ProjectDetails = ({ projectDetails }) => {
  const details = (
    <div
      style={{
        alignContent: "center",
        width: "290px",
        marginBottom: "60px"
      }}>
      <ul>
        {projectDetails.map(detail => (
          <li
            style={{
              listStyle: "none",
              textAlign: "center",
              margin: "0 35px 10px 0",
              fontFamily: "Lato"
            }}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );

  return <div>{details}</div>;
};

export default ProjectDetails;
