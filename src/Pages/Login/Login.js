import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';
import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { allContext } = useAuth();
    const { googleSignIn, logInWithEmail, setUser } = allContext;
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.logemail.value;
        const password = e.target.logpassword.value;
        logInWithEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                history.push(redirect_uri);
            })
    }

    return (
        <div className="bg-purple-100">
            <div className="login pt-32">
                <h2 className="text-4xl font-semibold text-green-400 mb-6 text-center">Login</h2>
                <div className="flex items-center justify-center">
                    <form onSubmit={handleLogin}>
                        <input type="email" name="logemail" className="input block py-4 px-2 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your email address*" />
                        <input type="password" name="logpassword" className="input block py-4 px-2 my-6 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your password*" />
                        <input type="submit" value="Login" className="bg-green-300 text-white font-semibold text-md login-btn cursor-pointer" />
                    </form>
                </div>
                {error && (
                    <p className="text-red-600 text-md text-center">{error}</p>
                )}
                <p className="text-md text-center mt-4">Dont have any account? <Link to="/register" className="text-green-400">Register here</Link></p>

                <p className="text-center text-md">-----------------------or-----------------------</p>
                <div className="flex mt-4">
                    <button onClick={handleGoogleLogin} className="mx-auto border-2 border-green-400 px-20 py-3 text-lg">
                        Continue with Google
                        <BsGoogle className="text-2xl inline ml-4 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;