import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const [userToggle, setUserToggle] = useState(false)
    const { user, logOut } = useAuth();
    return (
        <div className="header flex items-center justify-around py-4">
            <div className="nav-brand">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="menu">
                <Link to="/home" className="mr-5 font-semibold text-xl">Home</Link>
                <Link to="/blog" className="mx-5 font-semibold text-xl ">Blog</Link>
                <Link to="/doctors" className="mx-5 font-semibold text-xl ">Doctor</Link>
                <Link to="/contact" className="font-semibold text-xl">Contact</Link>
            </div>
            <div className="button flex">
                <Link to="/"><button className="px-6 py-3 bg-green-400 mr-5 font-bold text-white rounded-md hover:bg-blue-300">Book Online</button></Link>

                {user.email ?
                    <button onClick={() => setUserToggle(!userToggle)}><img className="user-image" src={user.photoURL} alt="" /></button>
                    :
                    <Link to="/login"><button className="px-6 py-3 bg-green-400 font-bold text-white rounded-md hover:bg-blue-300">Login</button></Link>
                }

                {userToggle && (
                    <div className={user.email ? "user-toggle" : "hidden"}>
                        <img className="user-image ml-12" src={user.photoURL} alt="" />
                        <h5 className="text-black my-3 text-xl">{user.displayName}</h5>
                        <button onClick={logOut} className="px-6 py-3 bg-green-400 font-bold text-white rounded-md hover:bg-blue-300">Logout</button>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Header;