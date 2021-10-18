import React from 'react';
import img1 from '../../assets/gallery/gal-1.jpg';
import img2 from '../../assets/gallery/gal-2.jpg';
import img3 from '../../assets/gallery/gal-3.jpg';
import img4 from '../../assets/gallery/gal-4.jpg';
import img5 from '../../assets/gallery/gal-5.jpg';
import img6 from '../../assets/gallery/gal-6.jpg';
import './ImageGallery.css';

const ImageGallery = () => {
    return (
        <div className="flex items-center gallery">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img5} alt="img" />
            <img src={img6} alt="img" />
        </div>
    );
};

export default ImageGallery;