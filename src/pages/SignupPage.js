import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_URL = 'htpp://localhost:5005';

function SignUpPage() {
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [errorMessage, setErrorMessage] = useState(null)

const handleEmail = (e) => setEmail(e.target.value);
const handleUsername = (e) => setUsername(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);
const handleName = (e) => setName(e.target.value);


}

export default function SignupPage() {
  return (
    <div className="SignupPage">
        <h1>Please Sign up Here</h1>

    <form>
        <label>Username</label>
        <input 
        type="text"
        name="username"
        value={username} />

        <label>Email</label>
        <input 
        type="email"
        name="email"
        value={email} />

        <label>Password</label>
        <input  
        type="password"
        name="password"
        value={password}/>

        <label>Full Name</label>
        <input 
        type="text"
        name="name"
        value={name} />

        <hr>
        </hr>

    <button type="submit">Sign up here</button>

    <h4>If you already have an account click here</h4>
    </form>














    </div>
  )
}
