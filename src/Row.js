import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Row.css";


// Base URL for getting the image   
const imgURL = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([])


    useEffect(() => {

        async function fetchdata() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchdata();

    }, [fetchURL])



    return (
        <>
            <div className='row'>
                <h2 className='row_names'>{title}</h2>

                <div className='row__posters'>
                    {
                        movies.map((movie) => {
                            return <img
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row_largePoster"}`}
                                src={`${imgURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie?.name} />
                        })
                    }
                </div>
            </div>


        </>
    )
}


export default Rows
