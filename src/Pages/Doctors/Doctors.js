import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/doctors-1.jpg';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="doctors-section">
            <div className="bg-purple-200 py-20">
                <div className="flex items-center justify-around">
                    <div>
                        <p className="text-lg text-green-500">Our Doctors</p>
                        <h2 className="text-4xl font-bold py-6">Contact us easily <br /> online, by phone or by <br /> dropping in</h2>
                        <button className="bg-green-400 px-6 py-4 text-lg font-semibold text-white">Request Appointment</button>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            {/* Doctor section */}
            <div className="doctors mx-60 my-20">
                <div className="grid grid-cols-2 gap-20">
                    {doctors.map(doctor => {
                        const { id, name, expert, image, phone, email } = doctor;
                        return (
                            <div key={id} className="doctor">
                                <img src={image} alt="doctors-pic" />
                                <h2 className="text-3xl font-semibold mt-6">{name}</h2>
                                <h3 className="text-xl text-purple-500 font-semibold">Experts In: {expert}</h3>
                                <p className="text-lg text-green-400">Cell: {phone}</p>
                                <p className="text-lg">Email: {email}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="text-center bg-green-200 py-16">
                <p className="text-xl mb-6">Have any question?</p>
                <h2 className="text-4xl font-semibold">
                    Learn more about what we <br /> can do for you
                </h2>
                <Link to="/contact">
                    <button className="bg-purple-400 px-6 py-4 text-lg font-semibold mt-6 ">Contact us</button>
                </Link>
            </div>
        </div>
    );
};

export default Doctors;