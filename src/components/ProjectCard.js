import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/project.css";
import { Link } from 'react-router-dom';
import { Context } from "../GlobalState";

const ProjectCard = ({id, title, jira, mockup, conf}) => {
    const {deleteProject} = useContext(Context);

   
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <h3 className='project-title'>{title}</h3> 

          <div className='link-wrapper'>
            <a className="project-links" href={jira}>| JIRA |</a>
            <a className="project-links" href={mockup}>Mockup |</a>
            <a className="project-links" href={conf}>Confluence |</a>
          </div>

          <div className='project-btn-wrapper'>
            <Link to={`/project/${id}`}><i className="fa-solid fa-eye view-icon"></i></Link>
            <span onClick={() => deleteProject(id)} className='delete'><i className="fa-solid fa-trash-can icons"></i></span>
          </div>

            </Card.Body>
      </Card>

        
    )
}

export default ProjectCard;