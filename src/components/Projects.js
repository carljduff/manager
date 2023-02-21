import React, { useContext } from "react";
import { Context } from "../GlobalState";
import ProjectCard from "./ProjectCard";
import "../css/project.css"

const Projects = () => {
    const { projects } = useContext(Context);
        console.log(projects);
    
        return(
            <div className='project-wrapper'>
              {projects.map((item) => {
                  return <ProjectCard key={item.id} id={item.id} title={item.title} jira={item.jira} mockup={item.mockup} conf={item.confluence} />
              })}
          </div>
        )

    
 
}

export default Projects;