import React, { useEffect, useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="blog-section">
            <div className="blogs mx-60 my-10">
                {
                    blogs.map(blog => {
                        const { id, title, image, publish_date, description } = blog;
                        return (
                            <div key={id} className="blog my-10">
                                <img src={image} alt="" />
                                <div className="mt-6 flex items-center">
                                    <FaCalendarAlt className="mr-3 text-xl text-purple-500" />
                                    <p className="text-xl text-purple-500">{publish_date}</p>
                                </div>
                                <h2 className="text-4xl font-semibold mb-6 text-green-500">{title}</h2>
                                <div>
                                    <p className="text-2xl">{description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
            {/* Image Gallery Section */}
            <ImageGallery></ImageGallery>
        </div>

    );
};

export default Blog;