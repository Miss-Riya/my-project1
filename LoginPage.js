import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Linking the CSS file

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;

            if (success) {
                console.log('Login Successfully');
            } else {
                console.log(message);
            }
        } catch (error) {
            console.error('Login error', error);
        }

        setLoginData({
            username: '',
            password: ''
        });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome Back</h2>
                <form onSubmit={handleLoginSubmit} className="login-form">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={loginData.username}
                        onChange={handleLoginChange}
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                    <p className="register-link">
                        Not registered yet? <Link to="/registration">Register here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
