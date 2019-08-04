import React from "react";
import Project from "../Project/Project";
import styles from "./ProjectListStyles";
import { withStyles } from "@material-ui/styles";

function ProjectList({ classes }) {
  const projects = [
    {
      id: 1,
      title: "Dad Jokes API",
      img: "../static/DadJokesAPI.JPG",
      url: "https://dad-jokes-api.herokuapp.com/",
      details: [
        "API request",
        "Data stored in localStorage",
        "Reorder by up and down voting"
      ]
    },
    {
      id: 2,
      title: "Large Color App",
      img: "../static/ColorApp.JPG",
      url: "https://large-color-app.herokuapp.com/",
      details: ["Responsive Design", "Form Validation", "Dynamic text color"]
    },
    {
      id: 3,
      title: "Hooks To Do List",
      img: "../static/HooksToDoApp.JPG/",
      url: "https://hooks-to-do-app.herokuapp.com/",
      details: [
        "Useage of reducers",
        "React Hooks",
        "Implements the use of React Context"
      ]
    }
  ];
  return (
    <div className={classes.projectList}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          marginLeft: "10px"
        }}>
        <h1
          style={{
            fontFamily: "Oswald",
            marginBottom: "-10px"
          }}>
          PROJECTS
        </h1>
        <h3
          style={{
            fontFamily: "Lato",
            fontWeight: "lighter"
          }}>
          A few projects that show my skills as a web developer, using reusable
          components to create single page applications.
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          alignContent: "center",
          flexWrap: "wrap",
          width: "100%"
        }}>
        {projects.map(project => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            url={project.url}
            projectDetails={project.details}
            image={project.img}
          />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(ProjectList);
