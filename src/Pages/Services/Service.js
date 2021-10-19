import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Service.css';

const Service = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();
    const serviceFound = services?.find(({ id }) => id == serviceId)

    const { title, image, heading, description } = serviceFound;

    return (
        <div className="flex items-center justify-center mx-20 mt-10 service-container">
            <div>
                <img src={image} alt="" />
                <h2 className="text-4xl font-bold my-3">{title}</h2>
                <h3 className="text-2xl font-bold my-5 heading">{heading}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
};

export default Service;