import React from 'react';
import img from '../../assets/images/home-8.jpg';
import './OfferService.css';

const OfferService = () => {
    return (
        <div className="flex items-center justify-around offers">
            <div>
                <p className="text-lg text-green-500">Includes free consultation*</p>
                <h2 className="text-4xl font-bold py-6">Get Complete Dental <br /> Implant: <span className="text-purple-500">Save 15%</span></h2>
                <p className="text-lg pb-6">Dr. Simmons and her team of Oral Surgeons and <br /> Periodontists are committed to providing you with the <br /> highest quality of implants and crowns.</p>
                <button className="bg-green-400 px-6 py-4 text-lg font-semibold text-white">Request Appointment</button>
                <p className="text-md font-semibold pt-6">*The offer expires on August 30, 2022</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default OfferService;