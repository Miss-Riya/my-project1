import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RegistrationPage.css'; // CSS file link

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: ''
    });

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;

        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/register', registrationData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

        setRegistrationData({
            username: '',
            password: ''
        });
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <h2 className="registration-title">Create an Account</h2>
                <form onSubmit={handleRegistrationSubmit} className="registration-form">
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={registrationData.username}
                        onChange={handleRegistrationChange}
                        required
                        className="registration-input"
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={registrationData.password}
                        onChange={handleRegistrationChange}
                        required
                        className="registration-input"
                    />

                    <button type='submit' className="registration-button">Register</button>

                    <p className="login-link">
                        Already registered? <Link to="/login">Login Here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
