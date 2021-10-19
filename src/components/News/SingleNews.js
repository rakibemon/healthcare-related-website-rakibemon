import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './News.css'
const SingleNews = ({ singleNews }) => {
    const { img, name, docName, dept, descroption } = singleNews || {};
    return (
        <Col xs={12} md={12} >
            <div className='news'>
                <div>
                    <figure className='text-center'>
                        <img src={img} className='img-fluid' alt={name} />
                    </figure>
                    <h2 className="text-center mt-5 title"> {name}</h2>
                    <div className="d-flex justify-content-center">
                        <h6> by <span className='orange-color'>{docName}</span></h6>
                        <h6> in  <span className='orange-color'>{dept}</span></h6>
                    </div>
                    <div className="text-cente text-wrap my-4">
                        <p>{descroption}</p>
                    </div>
                    <div className="text-center">
                        <Button variant='info' className=' text-white py-2 px-4 news-button fw-bold'> READ MORE </Button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default SingleNews;