import React from 'react';
import img1 from '../../assets/images/home-1.jpg';
import './Home.css';
import { BsTelephoneForward } from "react-icons/bs";
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="home">
            <div className="flex items-center justify-around bg-purple-200 hero-section">
                <div className="left-part">
                    <h2 className="font-bold text-6xl mb-5">A first class <br /> dentistry <br /> experience</h2>
                    <p className="text-xl font-semibold ">Because your smile is the beauty of your soul.</p>
                    <div className="flex items-center justify-between">
                        <button className="px-6 py-3 bg-green-400 mt-6 font-bold text-white rounded-md">Book Online</button>
                        <div className="flex items-center justify-center mt-6">
                            <div className="bg-white p-4 rounded-full w-1/4">
                                <BsTelephoneForward />
                            </div>
                            <p className="text-lg font-semibold ml-2"><a href="tel:1-800-123-1234">1-800-123-1234</a></p>
                        </div>
                    </div>

                </div>
                <div className="right-part">
                    <img src={img1} style={{ height: "90%" }} alt="" />
                </div>
            </div>

            <div className="main">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;