
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Footer from './Footer';
const SingleMovie = () => {
    const { id } = useParams();
    console.log(id);
  
    const { movie} = useFetch(`&i=${id}`);
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