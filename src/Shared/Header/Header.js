import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header flex items-center justify-around py-4 bg-green-100">
            <div className="nav-brand">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="menu">
                <Link to="/home" className="mr-5 font-semibold text-xl active">Home</Link>
                <Link to="/blog" className="mx-5 font-semibold text-xl">Blog</Link>
                <Link to="/doctors" className="mx-5 font-semibold text-xl">Doctor</Link>
                <Link to="/contact" className="font-semibold text-xl">Contact</Link>
            </div>
            <div className="btn">
                <Link><button className="px-5 py-3 bg-green-500 mr-5 font-bold text-white rounded-full hover:bg-red-300">Book Online</button></Link>
                <Link><button className="px-5 py-3 bg-green-500 font-bold text-white rounded-full hover:bg-red-300">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;