import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth.js";
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from "../Spinner.js";
export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth(); // Destructure auth from useAuth hook
    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get('http://localhost:8096/api/v1/auth/user-auth', {
                    headers: {
                        "Authorization": auth?.token,
                    },
                });
                setOk(res.data.ok); // Set ok based on response data
            } catch (error) {// Handle any errors that occur during the request
                console.error("Error checking authentication:", error);
                setOk(false); // Set ok to false in case of an error
            }}// Check if auth.token exists before calling authCheck
        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);
    return ok ? <Outlet /> : <Spinner />;
}
