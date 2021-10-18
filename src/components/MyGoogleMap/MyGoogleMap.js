import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MyGoogleMap = () => {

    const containerStyle = {
        width: '350px',
        height: '225px'
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

export default MyGoogleMap;
