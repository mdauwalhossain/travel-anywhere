import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row } from 'react-bootstrap';
import Body from '../Body/Body';
import './Home.css'

const Home = () => {
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    }, [])
    return (
        <div className="home">
           
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    width={500} height={500}
                    className="slider w-100"
                    src="https://i.ytimg.com/vi/ma43WUjFe8Q/maxresdefault.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="text-info bg-dark">
                    <h3>Advanture</h3>
                    <p>Travel World offers a broad array of high class services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    width={500} height={500}
                    className="slider w-100"
                    src="https://www.nomadicchica.com/en/productive/wp-content/uploads/2016/05/1-travel-make-us-happy-1024x535.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="text-light bg-dark">
                    <h3>Quality Time</h3>
                    <p>Travel World offers a broad array of high class services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={500} height={500}
                    className="slider w-100"
                    src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/rn1GWaouY7.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="text-warning bg-dark">
                    <h3>Vacation</h3>
                    <p>Travel World offers a broad array of high class services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            
            <h2 className="mt-5 text-light bg-dark">Take a Service</h2>

            <div>
                <div className="show-cards row">
                    <Row xs={1} md={2} className="g-4">
                        {
                        infos.slice(0,6).map(info => <Body 
                            key= {info._id}
                            info={info}                                                    
                            ></Body>)
                        }                            
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;