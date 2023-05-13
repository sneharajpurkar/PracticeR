import React from 'react'
import './Home.css';


const Navbar = () => {
    return (
        <>
            <div id='navbar'>
                <div id='navbar-left'>
                    <div>
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='image' />
                    </div>
                    <div>
                        <p>Movies</p>
                    </div>
                    <div>
                        <p>TV Shows</p>
                    </div>
                    <div>
                        <p>People</p>
                    </div>
                    <div>
                        <p>More</p>
                    </div>
                </div>
                <div id='navbar-right'>
                    <div>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div>
                        <p>EN</p>
                    </div>
                    <div>
                        <p>Login</p>
                    </div>
                    <div>
                        <p>Join TMDB</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar