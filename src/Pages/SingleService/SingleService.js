import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SingleService.css';

const SingleService = () => {

    const { serviceId } = useParams();
    const { services } = useAuth();
    const serviceFound = services?.find(({ id }) => id == serviceId)

    const { title, image, heading, description } = serviceFound;
    return (
        <div>
            <div className="flex items-center justify-center mx-20 mt-10 service-containerr">
                <div>
                    <img src={image} alt="" />
                    <h2 className="text-4xl font-bold my-3">{title}</h2>
                    <h3 className="text-2xl font-bold my-5 heading-post">{heading}</h3>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;