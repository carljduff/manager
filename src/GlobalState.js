import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

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
            const projectResponse = await axios.get("https://8000-carljduff-qabackend-i398f4bi4cn.ws-us86.gitpod.io/api/projects/")
            // .then((response) => {
            //     setState({projects: response.data})
            // })
            const postResponse = await axios.get('https://8000-carljduff-qabackend-i398f4bi4cn.ws-us86.gitpod.io/api/posts/')

            setState({
               projects: projectResponse.data, posts: postResponse.data
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
