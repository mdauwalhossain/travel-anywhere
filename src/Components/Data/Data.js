import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Data = (props) => {
    const {name,image, details, price} = props.data;
    return (
        <div className="detail bg-success"> 

           
            
           
                <div class="card">
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{details}</p>
                    <p class="card-text">{price}</p>

                    </div>
                    <div class="card-footer">
                    <Link to="order" style={{textDecoration: 'none' , px: '5'}} className="border border-3 px-3 border-info bg-warning rounded-pill">Book Now</Link>
                    </div>
                </div>
            






            {/* <div>
                <Row xs={1} md={2} className="">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                        <Card className="rounded mx-auto d-block bg-secondary">
                            <Card.Img className="text-center rounded" variant="top" src={image} />
                            <Card.Body>
                            <Card.Title className="text-light">Package: {name}</Card.Title>
                            <Card.Text>
                                <span className="">{details}</span>
                                <h6 className="text-warning">Price: {price}</h6>
                                <button className="border border-3 px-3 border-info bg-warning rounded-pill">Book Now</button>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div> */}
        </div>
    );
};

export default Data;