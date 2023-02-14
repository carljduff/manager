import React, { useContext } from "react";
import { Context } from "../GlobalState";

const Projects = () => {
    const { projects } = useContext(Context);
        console.log(projects);
    
        return(
          <div>
              {projects.map((item) => {
                  return item.title
              })}
          </div>
        )

    
 
}

export default Projects;