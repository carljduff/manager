import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/project.css";
import { Link } from 'react-router-dom';
const ProjectCard = ({id, title, jira, mockup, conf}) => {
    return(
       
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>JIRA: {jira}</p>
                <p>Mockup: {mockup} </p>
                <p>Confluence: {conf} </p>
            </Card.Text>
            <Link to={`/project/${id}`}><Button variant="primary">View Project</Button></Link>
            </Card.Body>
      </Card>

        
    )
}

export default ProjectCard;