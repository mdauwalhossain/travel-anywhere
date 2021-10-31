import React, { useRef } from 'react';
import './MyOrder.css';

const MyOrder = () => { 
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e => {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const newUser = {name, email};

      fetch('https://cryptic-springs-81955.herokuapp.com/products', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert ('You successfully fill up the form')
            e.target.reset();
        }
    })

      e.preventDefault();
    }
    return (
        <div>
            <div className="add-service">
                <br />
                <h2 className="">Fill up the Form, please</h2> <br />

                    <form onSubmit={handleAddUser}>                       
                        <input type="text" placeholder="Image URL" ref={nameRef} />
                        <input type="text" placeholder="Name" ref={nameRef} />
                        <input type="text" placeholder="Price" ref={nameRef} />
                        <input type="text" placeholder="Details" ref={nameRef} />
                        <input type="email" name="" id="" placeholder="Email" ref={emailRef}/>                        
                        <input type="submit" />
                    </form>
            </div>
            <img src="https://t3.ftcdn.net/jpg/02/80/01/60/360_F_280016022_rUaaDfYsSOvSgeHxN5p33p2CgxfOqaxX.jpg" alt="" />
        </div>
    );
};

export default MyOrder;