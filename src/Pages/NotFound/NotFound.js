import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center my-20 not-found">
            <div className="text-center">
                <h2 className="text-9xl font-bold tracking-widest">404</h2>
                <p className="text-lg mt-6">We're sorry, but the page you were looking for doesn't exist</p>
                <Link to="/home"><button className="px-6 py-3 mt-6 bg-green-400 font-bold text-white rounded-md hover:bg-blue-300">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;