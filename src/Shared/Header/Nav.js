import React from 'react';
import { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import useAuth from '../../hooks/useAuth';

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [userToggle, setUserToggle] = useState(false)
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 lg:mx-20">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <div className="nav-brand">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <button
                        className="text-black cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <RiMenu3Fill className="text-black text-3xl" />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center ul-div" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                        <li className="nav-item menu">
                            <Link to="/home" className="lg:mr-5 font-semibold text-lg">Home</Link>
                        </li>
                        <li className="nav-item menu">
                            <Link to="/blog" className="lg:mx-5 font-semibold text-lg ">Blog</Link>
                        </li>
                        <li className="nav-item menu">
                            <Link to="/doctors" className="lg:mx-5 font-semibold text-lg">Doctor</Link>
                        </li>
                        <li className="nav-item menu">
                            <Link to="/contact" className="lg:mr-5 font-semibold text-lg">Contact</Link>
                        </li>
                    </ul>

                    <div className="button flex items-center lg:ml-auto">

                        <Link to="/"><button className="px-4 py-2 bg-green-400 mr-5 font-bold text-white rounded-md hover:bg-blue-300 online-book">Book Online</button></Link>

                        {user.email ?
                            <button onClick={() => setUserToggle(!userToggle)}><h2 className="font-bold text-lg user-email">{user.email}</h2></button>
                            :
                            <Link to="/login"><button className="px-4 py-2 bg-green-400 font-bold text-white rounded-md hover:bg-blue-300">Login</button></Link>
                        }

                        {userToggle && (
                            <div className={user.email ? "user-toggle" : "hidden"}>
                                <button onClick={logOut} className="px-6 py-3 bg-green-400 font-bold text-white rounded-md hover:bg-blue-300">Logout</button>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;