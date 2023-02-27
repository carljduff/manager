import React, {useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../GlobalState";

const PostCard = ({postID, id, title, link, reference, desc}) => {

    const {deleteTicket} = useContext(Context);



    return(
        <>
         <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>LINK: {link}</Card.Text>
            <Card.Text>POSTID: {postID} </Card.Text>
            <Card.Text>reference: {reference} </Card.Text>
            <Card.Text>Notes: {desc} </Card.Text>
         <Button onClick={() => deleteTicket(id)} className='delete'>Delete</Button>
            </Card.Body>
      </Card>
        </>
    )
}

export default PostCard;