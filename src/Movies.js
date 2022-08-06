import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
const Movies=()=>{
    const {movie}=useGlobalContext();
    return (
        
        <div className="row justify-content-center ">

            {movie.map((curMovie)=>{
                const {imdbID,Title,Poster,Type,Year}=curMovie;
                return<NavLink to={`movie/${imdbID}`} key={imdbID} className="card col-md-3 m-3 bg-transparent">
                    <div className="movie bg-dark" >
                    <div className="card-info">
                    <img src={Poster} className="imagee mx-auto" alt=""></img>
                        <p className="title">{Title.length>75?`${Title.slice(0,75)}...`:Title}</p>
                    </div>
                    <div className="movie-info" >
                    <p className="type">TYPE : {Type}</p>
                    <p>Year : {Year}</p>
                    </div>
                    </div>
                </NavLink>;
            })}
        </div>
    );
        
};
export default Movies;