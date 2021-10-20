import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './News.css'
import SingleNews from './SingleNews';
const News = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('/newsData.json')
        .then(response => response.json())
        .then(data => setNews(data))
    },[]);
     //change the title when change the route
     useEffect(()=>{
        document.title='News';
      },[]);


    return (
        <Container>
            <Row className='gy-3 d-flex justify-content-start align-items-center'>
                {
                    news.map(singleNews => <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews>)
                }
            </Row>
        </Container>
    );
};

export default News;