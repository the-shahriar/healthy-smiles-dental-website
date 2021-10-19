import React, { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className="services">
            <p className="text-green-400 text-xl font-semibold mb-4">Welcome to Dentico Clinic</p>
            <h2 className="text-4xl font-bold">Cosmetic & General Dentistry</h2>
            <p className="text-lg my-6">Every day, more than 100 patients receive professional assistance in our clinic.</p>

            <div className="grid grid-cols-3 gap-4 service-container">
                {services.map(service => {
                    const { id, title, image, description } = service;
                    return (
                        <div key={id} className="service rounded-md">
                            <img className="rounded-md" src={image} alt="" />
                            <h3 className="text-2xl font-bold my-3">{title}</h3>
                            <p className="text-lg">{description.slice(0, 124)}</p>
                            <Link to={`/service/${id}`}><button className="bg-green-300 px-6 py-2 mt-4 text-md font-semibold">Read More < BsFillArrowRightCircleFill className="inline text-gray-500" /></button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Services;