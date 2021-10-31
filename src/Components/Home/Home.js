import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Body from '../Body/Body';
import './Home.css'

const Home = () => {
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-springs-81955.herokuapp.com/products')
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
                
                <h2 className="mt-5 text-light bg-dark">Take a Service</h2> <br />

                <div>
                    <div className="show-cards row">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {
                            infos.slice(0,6).map(info => <Body 
                                key= {info.id}
                                info={info}                                                    
                                ></Body>)
                            } 
                        </div>
                    </div>
            </div>


        {/* extra section 1 START */}
       <br /> <h2 className="text-light">Discount Quantity</h2> <br /> <br />
        
        <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Knowing something before Travelling</h4>
                        <p class="card-text"> <span>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.In one life we need to adventure and explore myself. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism. </span> </p>
                    </div>
                    <img src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-296-2.png"/>
                    
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <img src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-208-1.png"/>
                   
                    </div>
                </div>
        </div>

        {/* extra section 1 END */}
        <br /> <h2 className="text-light">Why we are ??</h2> <br /> <br />
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-25-2.png"/>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-text">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                    <h4 class="card-title">Knowing something before Travelling</h4>
                    <h4>Why choose us</h4>
                    <h6>1. BOOKING WITH SPREAD PAYMENTS</h6>
                    <h6>2. SLEEP & TRAVEL IN COMFORT</h6>
                    <h6>3. FULLY LICENSED TOUR OPERATOR</h6>
                </div>
            </div>
        </div>
        {/* section 2 END */}
    </div>
    );
};

export default Home;