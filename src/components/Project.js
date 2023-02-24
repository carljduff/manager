import React, { useContext, useState } from "react";
import { Context } from "../GlobalState";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Project = () => {
    const { state, addPost } = useContext(Context);
    const posts = state.posts;
    const { projectID } = useParams();

    
    let projectPosts = posts.filter((item) => item.project == projectID);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formValue, setFormValue] = useState({
        title: "",
        project: parseInt(projectID)
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
        eventFormData.append("project", formValue.project);
     
        // eventFormData.append("guests", formValue.guests);
    
        try {
            addPost(eventFormData);
            handleClose();
        } catch (error) {
          console.log(error);
          
        }

      };
   
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
        Add Post
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add A New Post</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <form onSubmit={handleSubmit}>
                <label>Project Title:</label>
                <input type="text" name="title" value={formValue.title} onChange={handleChange} />
                
                <input type="submit"/>

            </form>
          
        </Offcanvas.Body>
      </Offcanvas>
        
        <div>
            <ul>
           {projectPosts.map((item) => {
            return <li><Link key={item.id} to={`/post/${item.id}`}>{item.date}</Link></li>
           })}

            </ul>
        </div>
        </>
    )
}

export default Project;