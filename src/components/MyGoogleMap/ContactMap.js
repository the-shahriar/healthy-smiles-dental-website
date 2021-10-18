import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const ContactMap = () => {
    const containerStyle = {
        width: '700px',
        height: '500px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyBzSYKsicwoU6eBztopXVm3EK5gvoN7yKk"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default ContactMap;