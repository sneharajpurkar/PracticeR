import React, { useState, useEffect } from 'react';
import './Home.css';

const Api_key = "c45a857c193f6302f2b5061c3b85e743"

const fetchUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1
`

const UpcomingMovie = () => {
    const[upcomingMovie, setUpcomingMovie] = useState([]);

    useEffect(() => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((json) => setUpcomingMovie(json.results))
    },[])
    console.log(upcomingMovie, "upcomingMovie")

  return (
    <>
    <div id='screen'>
            <div id='mainDiv'>
                {upcomingMovie && upcomingMovie.map((e) => (
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt='image'/>
              <p>{e.title}</p>
              <p>{e.vote_average}</p>
            </div>
          ))
        }
            </div>
        </div>
    </>
  )
}

export default UpcomingMovie