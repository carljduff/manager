import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../GlobalState";
const Post = () => {
    const { postID } = useParams();
    const { state } = useContext(Context);
    const tickets = state.tickets;

    const ticketList = tickets.filter((item) => item.post == postID);

    // console.log(postID);
    return(
        <div>
            {ticketList.map((item) => {
                return item.title;
            })}
        </div>
    )
}

export default Post;