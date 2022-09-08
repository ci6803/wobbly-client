import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_URL = 'htpp://localhost:5005';

function SignUpPage() {
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");

const handleEmail = (e) => setEmail(e.target.value);
const handleUsername = (e) => setUsername(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);
const handleName = (e) => setName(e.target.value);

const navigate = useNavigate();

const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name, username};

    axios.post(`${API_URL}/auth/signup`, requestBody)
    .then((response) => {
        navigate('/');
    })
    .catch((error) => {
        console.log(error)
    })
};

  return (
    <div className="SignupPage">
        <h1>Please Sign up Here</h1>

    <form onSubmit={handleSignupSubmit}>
        <label>Username</label>
        <input 
        type="text"
        name="username"
        value={username} 
        onChange={handleUsername}/>

        <label>Email</label>
        <input 
        type="email"
        name="email"
        value={email}
        onChange={handleEmail} />

        <label>Password</label>
        <input  
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}/>

        <label>Full Name</label>
        <input 
        type="text"
        name="name"
        value={name} 
        onChange={handleName}/>

        <hr>
        </hr>

    <button type="submit">Sign up here</button>
    </form>
    <h4>If you already have an account click here</h4>
    

    </div>
  )
}

export default SignUpPage;
