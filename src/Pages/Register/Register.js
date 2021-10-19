import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className="bg-purple-100">
            <div className="login pt-32">
                <h2 className="text-4xl font-semibold text-green-400 mb-6 text-center">Create your account!</h2>
                <div className="flex items-center justify-center">
                    <form>
                        <input type="text" name="text" className="input block py-4 px-2 mb-6 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your name*" />
                        <input type="mail" name="mail" className="input block py-4 px-2 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your email address*" />
                        <input type="password" name="password" className="input block py-4 px-2 my-6 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your password*" />
                        <input type="submit" value="Register" className="bg-green-300 text-white font-semibold text-md register-btn cursor-pointer" />
                    </form>
                </div>
                <p className="text-md text-center mt-4">Already have an account? <Link to="/login" className="text-green-400">Login here</Link></p>
                <p className="text-center text-md">-----------------------or-----------------------</p>
                <div className="flex mt-4">
                    <button onClick={googleSignIn} className="mx-auto border-2 border-green-400 px-24 py-3 text-lg">
                        Continue with Google
                        <BsGoogle className="text-2xl inline ml-4 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;