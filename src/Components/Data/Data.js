import React from 'react';
import { Link } from 'react-router-dom';

const Data = (props) => {
    const {name,image, details, price} = props.data;
    return (
        <div className="detail bg-success"> 
           
            <div class="card">
                <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 className="bg-dark text-light card-title">{name}</h5>
                <p style={{color:"darkslategray"}} class="card-text">{details}</p>
                <h6 class="card-text">Price - {price}</h6>

                </div>
                <div class="card-footer">
                <Link to="order" style={{textDecoration: 'none' , px: '5'}} className="border border-3 px-3 border-info bg-warning rounded-pill">Book Now</Link>
                </div>
            </div>
           
        </div>
    );
};

export default Data;