import React, { useEffect, useState } from "react";
import ProjectsData from "../ProjectsData/ProjectsData.json";

export const ProjectsComponent = (props) => {
  const [filteredProjects, setFilteredProjects] = useState([...ProjectsData]);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (props.searchValue) {
      const updatedData = ProjectsData.filter(project => project.title.toLowerCase().includes(props.searchValue.toLowerCase()))
      setFilteredProjects(updatedData)
    } else {
      setFilteredProjects([...ProjectsData]);
    }
  }, [props.searchValue])

  const cardClickHandler = (projectId) => {
    // console.log(projectId);
    setSelectedProject(projectId);
  }

  const mouseLeaveHandler = () => {
    setTimeout(() => {
      setSelectedProject("");
    }, 250)
  }

  return (
    <div className="d-flex flex-wrap">
      {
        filteredProjects.map(project => {
          return (
            <div
              onClick={() => cardClickHandler(project.id)}
              onMouseLeave={mouseLeaveHandler}
              title="Click to view detailed info"
              className={`card project-card ${project.id === selectedProject ? "card-clicked" : ""}`}
              key={project.id}>
              <div className="card-front">
                <img
                  className="card-img-top"
                  src={project.imageUrl}
                  alt={`${project.title}`} />
                <div className="card-body d-flex flex-column justify-content-between overflow-hidden">
                  <div className="d-flex flex-column overflow-auto">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-secondary mb-3">{project.desc}</p>
                  </div>
                  <a href={project.imdbUrl} rel="noreferrer" target="_blank" className="btn btn-warning"><strong>IMDB</strong></a>
                </div>
              </div>
              <div className="card-back">
                <div className="text-white">
                  BACKSIDE TEST
                </div>
                <div className="text-white">
                  Gonna put info for {project.title} here
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}