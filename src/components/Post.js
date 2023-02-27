import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../GlobalState";
import PostCard from "./PostCard";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Post = () => {
    const { postID } = useParams();
    const { state, addTicket } = useContext(Context);
    const tickets = state.tickets;

    const ticketList = tickets.filter((item) => item.post === parseInt(postID));


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formValue, setFormValue] = useState({
        title: "",
        link: "",
        reference: "",
        description: "",
        category: 1,
        post: parseInt(postID)
      });
    
      const handleChange = (e) => {
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value,
        });
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const eventFormData = new FormData();
        eventFormData.append("title", formValue.title);
        eventFormData.append("link", formValue.link);
        eventFormData.append("reference", formValue.reference);
        eventFormData.append("description", formValue.description);
        eventFormData.append("category", formValue.category);
        eventFormData.append("post", formValue.post);
         
        try {
            addTicket(eventFormData);
            handleClose();
        } catch (error) {
          console.log(error);
        }

      };

    return(
        <>
            <Button onClick={handleShow} className='delete'>Add Ticket</Button>
        
            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add A New Ticket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <form onSubmit={handleSubmit}>
                <label>Ticket Title:</label>
                <input type="text" name="title" value={formValue.title} onChange={handleChange} />
                <label>Ticket JIRA Title:</label>
                <input type="text" name="link" value={formValue.link} onChange={handleChange} />
                <label>Work Reference Link:</label>
                <input type="text" name="reference" value={formValue.reference} onChange={handleChange} />
                <label>Ticket Notes:</label>
                <input type="text" name="description" value={formValue.description} onChange={handleChange} />

                <input type="submit"/>

            </form>
          
        </Offcanvas.Body>
      </Offcanvas>
        
        
        <div>
            {ticketList.map((item) => {
                return <PostCard key={item.id} postID={postID} id={item.id} title={item.title} link={item.link} reference={item.reference} desc={item.description} />
            })}
        </div>
        </>
    )
}

export default Post;