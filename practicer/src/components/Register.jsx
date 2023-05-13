import React from 'react'
import Navbar from './Navbar'
import './Home.css';

const Register = () => {
    return (
        <>
            <Navbar />
            <div id='register'>
                <div id='registerrr'>
                    <div className='register-left'>
                        <div>
                            <h3>Benefits of being a member</h3>
                        </div>
                        <div>
                            <ul>
                                <li> Find something to watch on your subscribed streaming services</li>
                                <li>Log the movies and TV shows you have watched</li>
                                <li>Keep track of your favourite movies and TV shows and get recommendations from them</li>
                                <li>Build and maintain a personal watchlist</li>
                                <li> Build custom mixed lists (movies and TV)</li>
                                <li>Take part in movie and TV discussions</li>
                                <li>Contribute to, and improve the information in our database</li>
                            </ul>
                        </div>
                    </div>
                    <div className='register-right'>
                        <h2>Sign up for an account</h2>
                        <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
                        <form>
                            <fieldset>
                                <label>Username</label><br/>
                                <input /><br/>
                                <label>Password (4 characters minimum)</label><br/>
                                <input /><br/>
                                <label>Password Confirm</label><br/>
                                <input /><br/>
                                <label>Email</label><br/>
                                <input />
                            </fieldset>
                            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
                            <div>
                                <input type='submit' value='Sign Up'/>
                                <p>Cancel</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register