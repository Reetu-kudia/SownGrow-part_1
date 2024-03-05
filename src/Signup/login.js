/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import firebase from './firebaseConfig';

const history = createBrowserHistory();
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState(false);
  

    const submit = async (e) => {
        e.preventDefault();

        // Initialize isValid to true
        let isValid = true;

        setEmailError(false);

        if (email === '') {
            setEmailError(true);
            isValid = false; // Set isValid to false if email is empty
            alert("Email address is required");
        } else if (!email.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i)) {
            setEmailError(true);
            isValid = false; // Set isValid to false if email is invalid
            alert("Please enter a valid email address");
        } else if (email[0] === email[0].toUpperCase()) {
            setEmailError(true);
            isValid = false; // Set isValid to false if email starts with uppercase letter
            alert("Email address cannot start with an uppercase letter");
        }

        // Only proceed if isValid is true
        if (isValid) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, pass);
                alert("Login successfully");
                // Navigate to Home page after successful login
                history.push("/Home");
               
                
            } catch (error) {
                
                alert("Invalid email or password");
            }
        }
    };

    return (
        <div className='main_container_signup'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            
            <div className='box'>
                <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p className='error-message'>Email address is required or Email address cannot start with an uppercase letter</p>}
            </div>
            <div className='box'>
                <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
            </div>
            <p>Don't Have an Account : <Link to="/" style={{ color: 'white' }}>Create Account</Link></p>
            <button onClick={submit}>Login</button>
        </div>
    );
};

export default Login;
*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const submit = async (e) => {
        e.preventDefault();

        // Initialize isValid to true
        let isValid = true;

        setEmailError(false);

        if (email === '') {
            setEmailError(true);
            isValid = false; // Set isValid to false if email is empty
            alert("Email address is required");
        } else if (!email.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i)) {
            setEmailError(true);
            isValid = false; // Set isValid to false if email is invalid
            alert("Please enter a valid email address");
        } else if (email[0] === email[0].toUpperCase()) {
            setEmailError(true);
            isValid = false; // Set isValid to false if email starts with uppercase letter
            alert("Email address cannot start with an uppercase letter");
        }

        // Only proceed if isValid is true
        if (isValid) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, pass);
                alert("Login successfully");
                // Navigate to Home page after successful login using navigate
                navigate("/Home");
            } catch (error) {
                alert("Invalid email or password");
            }
        }
    };

    return (
        <div className='main_container_signup'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            
            <div className='box'>
                <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p className='error-message'>Email address is required or Email address cannot start with an uppercase letter</p>}
            </div>
            <div className='box'>
                <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
            </div>
            <p>Don't Have an Account : <Link to="/" style={{ color: 'white' }}>Create Account</Link></p>
            <button onClick={submit}>Login</button>
        </div>
    );
};

export default Login;
