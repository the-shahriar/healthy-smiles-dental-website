import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return services;
};

export default useService;