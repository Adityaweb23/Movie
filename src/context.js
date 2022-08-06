import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("demon-slayer");
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setMovie(data.Search || data);
                setIsLoading(false);
                setIsError({show:"false",msg:data.Error});
            } else {
                setIsError({
                    show: "true",
                    msg: data.Error,
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timerout=setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        },500)
        return()=>{clearTimeout(timerout)};
    }, [query]);

    return (<AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}>{children}</AppContext.Provider>);
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };