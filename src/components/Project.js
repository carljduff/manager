import React, { useContext } from "react";
import { Context } from "../GlobalState";
import { useParams, Link } from "react-router-dom";


const Project = () => {
    const { posts } = useContext(Context);
    const { projectID } = useParams();

    console.log(projectID);
    let projectPosts = posts.filter((item) => item.project == projectID);

   
    return(
        <div>
           {projectPosts.map((item) => {
            return <Link key={item.id} to={`/post/${item.id}`}>{item.date}</Link>
           })}
        </div>
    )
}

export default Project;