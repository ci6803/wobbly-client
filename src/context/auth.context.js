import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = () => {
        
    }







}