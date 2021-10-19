import React from 'react';
import img from '../../assets/images/contacts-1.jpg'
import { BsTelephoneForward } from "react-icons/bs";
import ContactMap from '../../components/MyGoogleMap/ContactMap';
import './Contact.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const Contact = () => {
    return (
        <div>
            <div className="bg-purple-200 py-20">
                <div className="flex items-center justify-around contact-section">
                    <div>
                        <p className="text-lg text-green-500">Contact Us</p>
                        <h2 className="text-4xl font-bold py-6">Contact us easily <br /> online, by phone or by <br /> dropping in</h2>
                        <div className="flex items-center justify-between">
                            <button className="px-6 py-3 bg-green-400 mt-6 font-bold text-white rounded">Book Online</button>
                            <div className="flex items-center justify-center mt-6">
                                <div className="bg-white p-4 rounded-full w-1/4">
                                    <BsTelephoneForward />
                                </div>
                                <p className="text-lg font-semibold ml-2"><a href="tel:1-800-123-1234">1-800-123-1234</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            {/* Contact information */}

            <div className="my-20">
                <h2 className="text-4xl font-semibold text-gray-600 text-center">Contact Information</h2>
                <div className="flex items-center justify-center my-14 contact">
                    <div className="mr-16">
                        <ContactMap></ContactMap>
                    </div>

                    <div>
                        <h2 className="font-semibold text-3xl mb-3">Visit Address</h2>
                        <p className="font-semibold text-lg my-6">Brooklyn, NY 10036, United <br /> States</p>
                        <p className="text-2xl font-semibold text-green-400">Phone</p>
                        <a href="tel:1-800-123-1234" className="font-semibold text-lg my-6">1-800-123-1234</a>
                        <p className="text-2xl font-semibold text-green-400">Email</p>
                        <a href="mailto:clinic@example.com" className="font-semibold text-lg">clinic@example.com</a>
                    </div>
                </div>
            </div>
            {/* Contact Form */}

            <div className="text-center bg-green-100 py-16">
                <p className="text-xl mb-6">Ask us anything?</p>
                <h2 className="text-4xl font-semibold my-10">
                    We’re here to help
                </h2>
                <p className="text-lg">
                    Have a question? Just send our admin team a message and we’ll get back to <br /> you as quickly as possible.
                </p>
                <div className="flex items-center justify-center mt-10">
                    <div className="form">
                        <input type="text" name="text" className="input block py-4 px-2 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your name*" />
                        <input type="mail" name="mail" className="input block py-4 px-2 my-6 border-green-400 mr-5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your email address*" />
                        <textarea className="input block py- px-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full" rows="5" cols="100" name="comment" placeholder="Enter your text">
                        </textarea>
                        <button className="bg-green-300 px-32 py-4 mt-6 text-white font-semibold text-lg block "> Submit</button>
                    </div>
                </div>


            </div>

            {/* Image Gallery */}
            <ImageGallery></ImageGallery>
        </div >
    );
};

export default Contact;