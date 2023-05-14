import React, { useState } from 'react'
// import Navbar from './Navbar'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", password: "", conformPassword: "", email: "" });
    const route = useNavigate();

    function Register(e) {
        e.preventDefault();
        var userFromDB = JSON.parse(localStorage.getItem("user-data")) || [];


        var flag = false;
        for (var i = 0; i < userFromDB.length; i++) {
            if (userFromDB[i].name === userData.name) {
                flag = true;
            }
        }
        if (flag) {
            alert("registration not done");
        }
        else if (userData.password.length < 4) {
            alert("password must be 4 digit");
        }
        else if (userData.password.length !== userData.conformPassword.length) {
            alert("password not match")
        }
        else {
            userFromDB.push(userData);
            localStorage.setItem("user-data", JSON.stringify(userFromDB));
            setUserData({ name: "", password: "", conformPassword: "", email: "" })
            route('/login')
            alert("registion done");
        }
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    return (
        <>
            {/* <Navbar /> */}
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
                        <form onSubmit={(e) => Register(e)}>
                            <fieldset>
                                <label>Username</label><br />
                                <input onChange={updatingData} name='name' value={userData.name} type='text' /><br />
                                <label>Password (4 characters minimum)</label><br />
                                <input onChange={updatingData} name='password' value={userData.password} type='password' /><br />
                                <label>Password Confirm</label><br />
                                <input onChange={updatingData} name='conformPassword' value={userData.conformPassword} type='password' /><br />
                                <label>Email</label><br />
                                <input onChange={updatingData} name='email' value={userData.email} type='email' />
                            </fieldset>
                            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
                            <div>
                                <input type='submit' value='Sign Up' />
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