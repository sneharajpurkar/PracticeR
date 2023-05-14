import React, { useState } from 'react';
// import Navbar from './Navbar'; 
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [userData, setUserData] = useState({ name: "", password: "" })
    const route = useNavigate();

    function Login(e) {
        e.preventDefault();
        var userFromDB = JSON.parse(localStorage.getItem("user-data"));
        var currentUser;
        var flag = false;
        for (var i = 0; i < userFromDB.length; i++) {
            if (userFromDB[i].name === userData.name && userFromDB[i].password === userData.password) {
                flag = true;
                currentUser = userFromDB[i];
            }
        }
        if (flag) {
            userFromDB.push(userData);
            localStorage.setItem("current-user", JSON.stringify(currentUser));
            setUserData({ name: "", password: "" })
            route('/')
            alert("login done");
        }
        else{
            alert("login not done")
        }
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    function change() {
        route('/register')
    }

    return (
        <>
         {/* <Navbar /> */}
            <div id='login'>
                <div id='loginnn'>
                    <h2>Login to your account</h2>
                    <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <span style={{color:"#01b4e4", cursor:"pointer"}} onClick={change}>Click here</span> to get started.</p>
                    <p>If you signed up but didn't get your verification email, <span style={{color:"#01b4e4", cursor:"pointer"}}>click here</span> to have it resent.</p>
                    <form onSubmit={(e) => Login(e)}>
                        <fieldset>
                            <label>Username</label><br />
                            <input onChange={updatingData} name='name' value={userData.name} type='text' /><br />
                            <label>Password (4 characters minimum)</label><br />
                            <input onChange={updatingData} name='password' value={userData.password} type='password' /><br />
                        </fieldset>
                        <div>
                            <input type='submit' value='Login' />
                            <p>Reset Password</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login