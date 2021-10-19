import { useEffect, useState } from 'react';

const useData = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/servicesData.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return {
        services
    }
};

export default useData;