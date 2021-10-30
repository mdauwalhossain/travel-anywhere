import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const {name, price, image, details} = props.info;
    return (
        <div className="card">            
        <Col>
            <Card>
                <Card.Img className="img img-thumbnail mh-50 d-inline-block" variant="top" src={image} />
                <Card.Body className="">
                <Card.Title className="bg-red-500 text-info bg-dark">Category: {name}</Card.Title>
                <Card.Text className="text-info">
                    <h6>Price: {price} (Yearly)</h6>
                    <p><small>{details}</small></p>
                    <Link to="/order" style={{textDecoration: 'none' , px: '5'}} className=" border border-3 px-3 border-info bg-warning rounded-pill">Explore More</Link>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </div>
    );
};

export default Body;