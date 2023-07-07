import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import './Home.css';

const Api_key = "c45a857c193f6302f2b5061c3b85e743";

const SingleMovie = () => {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const data = useParams();

  const fetchUrl_movie = `https://api.themoviedb.org/3/movie/${data.id}?api_key=${Api_key}&language=en-US`
  const fetchUrl_cast = `https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=${Api_key}&language=en-US`

  useEffect(() => {
    fetch(fetchUrl_movie)
      .then((res) => res.json())
      .then((json) => setMovie(json))
  }, [fetchUrl_movie]);

  useEffect(() => {
    fetch(fetchUrl_cast)
      .then((res) => res.json())
      .then((json) => setCast(json.cast))
  }, [fetchUrl_cast]);

  console.log(movie, "movie");
  console.log(cast, "cast");

  return (
    <>

      <div id='main-div'>
        <div id='main-top'>
          <div id='left-side'>
            <div className='left-top'>
              <div className='left-top-left'><img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='image' /></div>
              <div className='left-top-right'>
                <h2>{movie.title}</h2><br />
                <p>Release Date: {movie.release_date}</p>
              </div>
            </div>
            <div className='left-bottom'>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div id='right-side'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='image' />
          </div>
        </div>
        <div id='main-bottom'>
          {cast && cast.map((e) => (
            <div id='sneha'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt='image' />
              </div>
              <div> <p>{e.name}</p></div>
            </div>
          ))}
        </div >
      </div >
    </>
  );
};

export default SingleMovie;
{/* {cast && cast.map((e) => (
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt='image'/>
          </div>
        ))} */}