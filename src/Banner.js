import React, { useState, useEffect } from 'react'
import './Banner.css';
import requests from './requests';
import axios from 'axios';
import { GrPlayFill } from 'react-icons/gr'

const Banner = () => {




    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOrignals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchdata();
    }, [])

    // function truncate(str, n) {
    //     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // }


    return (
        <>
            <header className='banner'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: 'center center',
                    objectFit: 'cover',
                }}
            >
                <div className='banner__content'>
                    {/*  Title */}
                    <h1 className='banner__title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>


                    <div className='banner__buttons'>
                        <button className='banner__button play'><span><GrPlayFill /></span>Play</button>
                        <button className='banner__button'>My List</button>
                    </div>

                    <h1 className='banner__description'>{movie?.overview}</h1>
                </div>
                <div className='fade-bottom'></div>
            </header>
        </>
    )
}

export default Banner
