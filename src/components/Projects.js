import React, { useContext, useState } from "react";
import { Context } from "../GlobalState";
import ProjectCard from "./ProjectCard";
import "../css/project.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Projects = () => {
    const {state, addProject} = useContext(Context);
    const projects = state.projects
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formValue, setFormValue] = useState({
        title: "",
        jira: "",
        mockup: "",
        confluence: ""
        // guests: [],
      });
    
      const handleChange = (e) => {
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        // navigate(-1)
        const eventFormData = new FormData();
        eventFormData.append("title", formValue.title);
        eventFormData.append("jira", formValue.jira);
        eventFormData.append("mockup", formValue.mockup);
        eventFormData.append("confluence", formValue.confluence);
     
        // eventFormData.append("guests", formValue.guests);
    
        try {
            addProject(eventFormData);
            handleClose();
        } catch (error) {
          console.log(error);
          
        }
      };
        return(
            <>
            <span onClick={handleShow}><i className="fa-solid fa-circle-plus add-btn"></i></span>
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <h3 className="add-title">Add A New Project</h3>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <form className="project-form" onSubmit={handleSubmit}>
                {/* <label>Project Name:</label> */}
                <input type="text" name="title" placeholder="Project Name" value={formValue.title} onChange={handleChange} />
                {/* <label>JIRA Name:</label> */}
                <input type="text" name="jira" placeholder="JIRA Link" value={formValue.jira} onChange={handleChange} />
                {/* <label>Mockup Name:</label> */}
                <input type="text" name="mockup" placeholder="Mockup Link" value={formValue.mockup} onChange={handleChange} />
                {/* <label>Confluence Name:</label> */}
                <input type="text" name="confluence" placeholder="Confluence Link" value={formValue.confluence} onChange={handleChange} />
                {/* <input type="submit"/> */}
                <Button variant="primary" type="submit">Submit</Button>

            </form>
          
        </Offcanvas.Body>
      </Offcanvas>
            <div className='project-wrapper'>
              {projects && projects.map((item) => {
                  return <ProjectCard key={item.id} id={item.id} title={item.title} jira={item.jira} mockup={item.mockup} conf={item.confluence} />
              })}
          </div>
            
            </>
        )

    
 
}

export default Projects;