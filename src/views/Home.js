import React, { useEffect, useState } from 'react';
import ACard from '../components/ACard';
import { Button, Container } from 'react-bootstrap';

const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    const handleReload = () => {
        setIsLoading(true);
        fetchData();
    };
    
    return (
        <Container>
            <Button variant="primary" className='mb-3' onClick={handleReload}>Muat Ulang</Button>
            <ACard data={data} isLoading={isLoading}/>
        </Container>
    );
};

export default Home;