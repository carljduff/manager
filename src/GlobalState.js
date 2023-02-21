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
            setState({
               projects: projectResponse.data, posts: postResponse.data, tickets: ticketResponse.data
            })
        } 
        getData()
    }, []);

    return(
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export {Context, GlobalProvider};
