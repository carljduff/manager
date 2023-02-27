import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import { API_URL } from "./constants";


const initialState = {
    posts: [],
    projects: [],
    tickets: [],
};

const Context = createContext(initialState);

const GlobalProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getData = async () => {
            const projectResponse = await axios.get(`${API_URL}/projects`)
            const postResponse = await axios.get(`${API_URL}/posts`)
            const ticketResponse = await axios.get(`${API_URL}/tickets`)
            // setState({
            //    projects: projectResponse.data, posts: postResponse.data, tickets: ticketResponse.data
            // })
            setState(prevState => ({
                ...prevState,
                projects: [...prevState.projects, ...projectResponse.data],
                posts: [...prevState.posts, ...postResponse.data],
                tickets: [...prevState.tickets, ...ticketResponse.data]
              }));
        } 
        getData()
    }, []);

    const addProject = async (projectData) => {
        const response = await axios.post(`${API_URL}/projects/`, projectData);
        setState((prevState) => ({
            ...prevState,
            projects: [...prevState.projects, response.data],
        }));
    }

    async function deleteProject(id) {
        await axios.delete(`${API_URL}/projects/${id}`);
        setState((prevState) => ({
            ...prevState,
            projects: state.projects.filter((item) => item.id !== id),
        }));
    }

    const addPost = async (postData) => {
        const response = await axios.post(`${API_URL}/posts/`, postData);
        setState((prevState) => ({
            ...prevState,
            posts: [...prevState.posts, response.data],
        }));
    }

    async function deletePost(id) {
        await axios.delete(`${API_URL}/posts/${id}`);
        setState((prevState) => ({
            ...prevState,
            posts: state.posts.filter((item) => item.id !== id),
        }));
    }

    const addTicket = async (ticketData) => {
        const response = await axios.post(`${API_URL}/tickets/`, ticketData);
        setState((prevState) => ({
            ...prevState,
            tickets: [...prevState.tickets, response.data],
        }));
    }

    async function deleteTicket(id) {
        await axios.delete(`${API_URL}/tickets/${id}`);
        setState((prevState) => ({
            ...prevState,
            tickets: state.tickets.filter((item) => item.id !== id),
        }));
    }

    
    return(
        <Context.Provider value={{state, addProject, addPost, addTicket, deleteProject, deletePost, deleteTicket}} >
            {children}
        </Context.Provider>
    )
}

export {Context, GlobalProvider};
