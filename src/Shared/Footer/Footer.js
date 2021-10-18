import React from 'react';
import { Link } from 'react-router-dom';
import MyGoogleMap from '../../components/MyGoogleMap/MyGoogleMap';
import './footer.css';

const Footer = () => {
    return (
        <div className="bg-white flex items-center justify-around mt-5">
            <div className="footer-menu">
                <h2 className="font-bold text-2xl mb-5">Resources</h2>
                <Link to="/home" className="font-semibold text-md block">Home</Link>
                <Link to="/blog" className="font-semibold text-md block">Blog</Link>
                <Link to="/doctors" className="font-semibold text-md block">Doctors</Link>
                <Link to="/contact" className="font-semibold text-md block">Contacct</Link>
                <Link to="/price-guide" className="font-semibold text-md block">Price Guide</Link>
            </div>
            <div className="contact-info">
                <h2 className="font-bold text-2xl mb-5">Contact Info</h2>
                <p className="text-md">Address</p>
                <p className="font-semibold text-md">Brooklyn, NY 10036, United <br /> States</p>
                <p className="text-md">Phone</p>
                <a href="tel:1-800-123-1234" className="font-semibold text-md">1-800-123-1234</a>
                <p className="text-md">Email</p>
                <a href="mailto:clinic@example.com" className="font-semibold text-md">clinic@example.com</a>
            </div>
            <div className="google-map">
                <h2 className="font-bold text-2xl mb-5">Our Location</h2>
                <MyGoogleMap></MyGoogleMap>
            </div>
            <div className="opening-time">
                <h2 className="font-bold text-2xl mb-5">Opening Time</h2>
                <div className="flex items-center justify-between">
                    <div className="contact-info mr-5">
                        <p className="text-md font-semibold">Monday:</p>
                        <p className="text-md font-semibold">Tuesday:</p>
                        <p className="text-md font-semibold">Wednesday:</p>
                        <p className="text-md font-semibold">Thursday:</p>
                        <p className="text-md font-semibold">Friday:</p>
                        <p className="text-md font-semibold">Saturday:</p>
                        <p className="text-md font-semibold">Sunday:</p>
                    </div>
                    <div className="contact-info ml-5">
                        <p className="text-md font-semibold">8:30am - 5pm</p>
                        <p className="text-md font-semibold">8:30am - 5pm</p>
                        <p className="text-md font-semibold">8:30am - 5pm</p>
                        <p className="text-md font-semibold">8:30am - 5pm</p>
                        <p className="text-md font-semibold">8:30am - 5pm</p>
                        <p className="text-md font-semibold text-right">Closed</p>
                        <p className="text-md font-semibold text-right">Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;