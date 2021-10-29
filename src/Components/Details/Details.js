import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Data from '../Data/Data';

const Details = () => {
    const [probs, setProbs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProbs(data))

    }
    ,[]);

    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    probs.map(para => <Data
                    key={para.id}
                    data={para}
                    ></Data>)
                }
                
            </Row>
        </div>
    );
};

export default Details;