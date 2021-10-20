import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();

    // Move to home page from not found
    const goHomePage = () => {
        history.push('/home')
    };

     //change the title when change the route
     useEffect(()=>{
        document.title='Not Found 404';
      },[]);

    return (
        <div className='not-found'>
            <div className='back-button'>
                <Button onClick={goHomePage} variant='danger'> Go to Home </Button>
            </div>
        </div>
    );
};

export default NotFound;