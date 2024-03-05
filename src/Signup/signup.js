import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = async (e) => {
        e.preventDefault();
    
        // Reset validation errors
        setNameError(false);
        setEmailError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
    
        // Validate form fields
        let isValid = true;
    
        if (name.length < 3) {
            setNameError(true);
            isValid = false;
        }
    
        if (email === '') {
            setEmailError(true);
            isValid = false;
            alert("Email address is required");
        } else if (!email.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i)) {
            setEmailError(true);
            isValid = false;
            alert("Please enter a valid email address");
        } else if (email[0] === email[0].toUpperCase()) {
            setEmailError(true);
            isValid = false;
            alert("Email address cannot start with an uppercase letter");
        }
    
        if (password.length < 6) {
            setPasswordError(true);
            isValid = false;
        }
    
        if (password !== confirmPassword) {
            setConfirmPasswordError(true);
            isValid = false;
        }
    
        // If all fields are valid, submit the form
        if (isValid){
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                if (user) {
                    await user.user.updateProfile({
                        displayName: name
                    });
                    alert("Account created successfully");
                }
            } catch (error) {
                alert(error);
            }
        } else {
            alert("Please fix the errors in the form before submitting.");
        }
    };
    
    return (
        <div className='main_container_signup'>
            <div className='header'>
                <h2>signup</h2>
            </div>
            <div className='box'>
                <input type='text' value={name} placeholder='Username' onChange={(e) => setName(e.target.value)} />
                {nameError && <p className='error-message'>Username must be at least 3 characters long</p>}
            </div>
            <div className='box'>
                <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p className='error-message'>Email address is required or Email address cannot start with an uppercase letter</p>}
            </div>
            <div className='box'>
                <input type={showPassword ? 'text' : 'password'} value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button className='show-password-button' onClick={togglePasswordVisibility} dangerouslySetInnerHTML={{ __html: showPassword ? '&#x21bb;' : '&#x1f512;' }}></button>
                {passwordError && <p className='error-message'>Password must be at least 6 characters long</p>}
            </div>
            <div className='box'>
 
                <input type='password' value={confirmPassword} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                {confirmPasswordError && <p className='error-message'>Passwords do not match</p>}
            </div>
            <p>Already Have an Account : <Link to="/login"  style={{ color: 'white' }}>Login Now</Link></p>
            <button onClick={submit}>Signup</button>
        </div>
    );
};
export default Signup