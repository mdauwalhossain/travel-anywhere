import React from 'react';

const Contact = () => {
    return (
        <div>
           <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Head Office</h2>
                        <p class="card-text"> House: SW (I) 1/A, <br />
                        Road: 100, Gulshan <br />
                        Dhaka-1212. </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Zonal Office</h2>
                        <p class="card-text">House: AS (L) 2/Z, <br />
                        Road: 123, Khulshi <br />
                        Chattogram-1213. </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;