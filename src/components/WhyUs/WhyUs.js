import React from 'react';
import img from '../../assets/images/home-6.jpg';
import { BsPlusCircle } from "react-icons/bs";
import './WhyUs.css';
import { Link } from 'react-router-dom';

const WhyUs = () => {
    return (
        <div className="why-us">
            <div className="bg-green-100 flex items-center justify-around section-container">
                <div className="left">
                    <img src={img} alt="" />
                </div>
                <div className="right">
                    <p className="text-xl text-green-700 py-6">Why Choose Us</p>
                    <h2 className="text-4xl font-bold py-6">Are you looking for a dentist to give you <br /> that special smile?</h2>
                    <p className="text-lg">Dentico Clinic provides the highest quality dental care in Los Angeles with a <br /> group of experienced dentists and specialists.</p>


                    <div className="flex items-center pt-6">
                        <div className="mr-6">
                            <div className="py-6 flex items-center">
                                <BsPlusCircle className="text-2xl text-purple-500 mr-4" />
                                <p className="text-lg font-semibold">Dental check-ups</p>
                            </div>
                            <div className="py-6 flex items-center">
                                <BsPlusCircle className="text-2xl text-purple-500 mr-4" />
                                <p className="text-lg font-semibold">Hygiene treatments</p>
                            </div>
                            <div className="py-6 flex items-center">
                                <BsPlusCircle className="text-2xl text-purple-500 mr-4" />
                                <p className="text-lg font-semibold">Crowns, veneers and bridges</p>
                            </div>
                        </div>
                        <div className="ml-6">
                            <div className="py-6 flex items-center">
                                <BsPlusCircle className="text-2xl text-purple-500 mr-4" />
                                <p className="text-lg font-semibold">Dental implant restoration</p>
                            </div>
                            <div className="py-6 flex items-center">
                                <BsPlusCircle className="text-2xl text-purple-500 mr-4" />
                                <p className="text-lg font-semibold">Root canal treatment</p>
                            </div>
                            <div className="py-6 flex items-center">
                                <BsPlusCircle className="text-2xl text-purple-500 mr-4" />
                                <p className="text-lg font-semibold">Professional teeth-whitening</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/doctors"><button className="bg-green-400 px-6 py-3 text-lg font-semibold mb-4">Meet Our Team</button></Link>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;