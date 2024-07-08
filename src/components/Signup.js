import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", passwordc: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, passwordc } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, passwordc })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/"); // Use navigate instead of history.push
            props.showAlert("Account created Succesfully", "success")
        }
        else {
            props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <div className='mt-3'></div>
            <h2>Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        name="name"
                        className="form-control"
                        id="inputName"
                        aria-describedby="name-here"
                        onChange={onChange} minLength = {5} required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="inputEmail"
                        aria-describedby="emailHelp"
                        onChange={onChange} minLength = {5} required
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        onChange={onChange} minLength = {5} required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="passwordc" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="passwordc"
                        className="form-control"
                        id="passwordc"
                        onChange={onChange} minLength = {5} required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>

            </form>
        </div>
    );
};

export default Signup;
