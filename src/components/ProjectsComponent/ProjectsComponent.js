import React from "react";
import ProjectsData from "../ProjectsData/ProjectsData.json";

export const ProjectsComponent = () => {


  const imdbClickHandler = (movieId) => {
    console.log("haha");
  }

  return (
    <div className="d-flex flex-wrap">
      {
        ProjectsData.map(project => {
          return (
            <div className="card project-card" key={Math.random()}>
              <img
                className="card-img-top"
                src={project.imageUrl}
                alt={`${project.title}`} />
              <div className="card-body d-flex flex-column justify-content-between overflow-hidden">
                <div className="d-flex flex-column overflow-auto">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-secondary mb-3">{project.desc}</p>
                </div>
                <a href={project.imdbUrl} rel="noreferrer" target="_blank" onClick={() => imdbClickHandler(project.title)} className="btn btn-warning"><strong>IMDB</strong></a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}