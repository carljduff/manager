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
            <Card.Title>{title}</Card.Title>
            <Card.Text>JIRA: {jira}</Card.Text>
            <Card.Text>Mockup: {mockup}</Card.Text>
            <Card.Text>Confluence: {conf} </Card.Text>

            <Link to={`/project/${id}`}><Button variant="primary">View Project</Button></Link>
         <Button onClick={() => deleteProject(id)} className='delete'>Delete</Button>
            </Card.Body>
      </Card>

        
    )
}

export default ProjectCard;