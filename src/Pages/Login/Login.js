import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import './Login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from() || '/blog';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="bg-purple-100">
            <div className="login pt-32">
                <h2 className="text-4xl font-semibold text-green-400 mb-6 text-center">Login to your account</h2>
                <div className="flex items-center justify-center">
                    <form>
                        <input type="mail" name="mail" className="input block py-4 px-2 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your email address*" />
                        <input type="password" name="password" className="input block py-4 px-2 my-6 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your password*" />
                        <input type="submit" value="Login" className="bg-green-300 text-white font-semibold text-md login-btn cursor-pointer" />
                    </form>
                </div>
                <p className="text-md text-center mt-4">Dont have any account? <Link to="/register" className="text-green-400">Register here</Link></p>
                <p className="text-center text-md">-----------------------or-----------------------</p>
                <div className="flex mt-4">
                    <button onClick={handleGoogleLogin} className="mx-auto border-2 border-green-400 px-24 py-3 text-lg">
                        Continue with Google
                        <BsGoogle className="text-2xl inline ml-4 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;