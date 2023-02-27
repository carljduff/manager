import React, { useContext } from "react";
import { Context } from "../GlobalState";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "../css/project.css";

const Project = () => {
    const { state, addPost, deletePost } = useContext(Context);
    const posts = state.posts;
    const { projectID } = useParams();
    const navigate = useNavigate();
    let postID = "";
    let projectPosts = posts.filter((item) => item.project === parseInt(projectID));

    const obj = {
      title: "",
      project: parseInt(projectID)
    };

    const addPostHandler = () => {
      addPost(obj);
      navigate(`/post/${postID}`)
    }
   
    return(
        <>
        <Button variant="primary" onClick={addPostHandler}>
        Add Post
      </Button>

        <div>
            <ul>
           {projectPosts.map((item) => {
            postID = item.id;
            return <li key={item.id}><Link to={`/post/${item.id}`}>{item.date}</Link> <span onClick={() => deletePost(item.id)}><i className="fa-solid fa-trash-can icons"></i></span></li>
           })}

            </ul>
        </div>
        </>
    )
}

export default Project;