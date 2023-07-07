import React, { useState } from 'react'
// import Navbar from './Navbar';
import './Home.css';
import { useEffect } from 'react';
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Data = require('../JSON/Data.json')

const Api_key = "c45a857c193f6302f2b5061c3b85e743"

const fetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`

const Home = () => {
  const[data, setData] = useState([]);
  const[dataj, setdataj] = useState("");
  const route = useNavigate();

  useEffect(() => {
    fetch(fetchUrl)
    .then((res) => res.json())
    .then((json) => setData(json.results))
  },[])

  console.log(data, "data")

  useEffect(() => {
    setdataj(Data)
  },[Data])

  function Singlemovie(e) {
    route(`/singlemovie/${e.id}`)
  }

  return (
    <>
      {/* <Navbar /> */}
      <div id='screen'>
        <div id='mainDiv'>
          {data && data.map((e) => (
            <div onClick={() => Singlemovie(e)}>
              <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt='image'/>
             < p>{e.title}</p>
              <p>{e.vote_average}</p>
            </div>
          ))
        }
        </div>
      </div>
      {/* <div>
        {dataj && dataj.map((e) => (
          <p>{e.name}</p>
        ))}
      </div> */}
    </>
  )
}

export default Home;