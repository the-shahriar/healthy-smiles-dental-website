import React from 'react';
import img1 from '../../assets/images/home-1.jpg';
import img2 from '../../assets/images/home-8-2-1.jpg';
import './Home.css';
import { BsTelephoneForward } from "react-icons/bs";
import Services from '../Services/Services';
import WhyUs from '../../components/WhyUs/WhyUs';
import OfferService from '../../components/OfferService/OfferService';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div className="home">
            <div className="flex items-center justify-around bg-purple-200 hero-section">
                <div className="left-part">
                    <h2 className="font-bold text-6xl mb-5 heading">A first class <br /> dentistry <br /> experience</h2>
                    <p className="text-xl font-semibold ">Because your smile is the beauty of your soul.</p>
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
                <div className="right-part">
                    <img src={img1} style={{ height: "90%" }} alt="" />
                </div>
            </div>
            {/* Service Section */}
            <Services></Services>

            {/* Why Us Section */}
            <WhyUs></WhyUs>

            {/* Discounted Service Section */}
            <OfferService></OfferService>

            {/* Section */}
            <div className="more-about bg-purple-100">
                <div className="flex items-center justify-around">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <p className="text-lg text-green-500">Invisalign® technology</p>
                        <h2 className="text-4xl font-bold py-6">Teeth straightening is <br /> simplier now, really</h2>
                        <p className="text-lg pb-6">Straighten your teeth this season with $300 off aligners. <br /> Book your free scan at one of our studios by 3/31 to qualify.</p>
                        <button className="bg-green-400 px-6 py-4 text-lg font-semibold text-white">Learn More</button>
                    </div>
                </div>
            </div>
            {/* Image Gallery Section */}
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;