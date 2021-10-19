import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const useService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return service;
};

export default useService;