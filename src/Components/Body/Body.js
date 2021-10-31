import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const {name, price, image, details} = props.info;
    return (
        <div className="card">            
        <Col>
            <Card>
                <Card.Img className="img" variant="top" src={image} />
                <Card.Body className="">
                <Card.Title className="bg-red-500 text-info bg-dark">Category: {name}</Card.Title>
                <Card.Text className="text-danger">
                    <h6 className="bg-dark">Price: {price}</h6>
                    <p className="text-secondary"><small>{details}</small></p>
                    <Link to="/order" style={{textDecoration: 'none' , px: '5'}} className=" border border-3 px-3 border-info bg-warning rounded-pill">Explore More</Link>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </div>
    );
};

export default Body;