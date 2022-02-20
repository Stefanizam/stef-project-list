import React from "react";
import ProjectsData from "../ProjectsData/ProjectsData.json";

export const ProjectsComponent = () => {


  const imdbClickHandler = (movieId) => {
    console.log(movieId);
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
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <button onClick={() => imdbClickHandler(project.title)} className="btn btn-warning">IMDB</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}