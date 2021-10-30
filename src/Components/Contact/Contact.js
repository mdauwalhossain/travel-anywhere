import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div >
           <div className="row">
                <div className="col-sm-6">
                    <div class="card">
                    <div className="item card-body">
                        <h2 class="card-title">Head Office</h2>
                        <p class="card-text"> House: SW (I) 1/A, <br />
                        Road: 100, Gulshan <br />
                        Dhaka-1212. </p>
                        <a href="#" class="btn btn-primary">Explore More</a>
                    </div>
                    </div>
                </div>
                <div className="item col-sm-6">
                    <div class="card">
                    <div className="item card-body">
                        <h2 class="card-title">Zonal Office</h2>
                        <p class="card-text">House: AS (L) 2/Z, <br />
                        Road: 123, Khulshi <br />
                        Chattogram-1213. </p>
                        <a href="#" class="btn btn-primary">Explore More</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;