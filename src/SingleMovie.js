import react, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { API_URL } from './context';
import Footer from './Footer';
const SingleMovie = () => {

    const { id } = useParams();
    const [setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setMovie(data);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timerout = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, 500)
        return () => { clearTimeout(timerout) };
    }, [id]);
    return (
        <>
            <div className="container">
                <Navbar />
            </div>
            <div className='container mb-5'>
                <div className='row  justify-content-center align-items-center'>
                    
                        <div className='row'>
                            <div className='col-md-5 p-3'>
                                <img className='img-fluid imageee' src={movie.Poster} alt="" />
                            </div>
                            <div className='col-md-6'>
                                <p>Actors : {movie.Actors}</p>
                                <p>Country : {movie.Country}</p>
                                <p>Director : {movie.Director}</p>
                                <p>Genre : {movie.Genre}</p>
                                <p>Released : {movie.Released}</p>
                                <p>Runtime : {movie.Runtime}</p>
                                <p>imdbRating : {movie.imdbRating}</p>
                                <p>Plot : {movie.Plot}</p>
                            </div>
                       
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};
export default SingleMovie;