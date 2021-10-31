import React, { useEffect, useState } from 'react';
import './User.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-springs-81955.herokuapp.com/products')
        .then(res => res.json())
        .then (data => setUsers(data));
    }
    ,[]);

    // Delete user
    const handleDeleteUser = id =>{
        // console.log(id)
        const proceed = window.confirm('Are you want to Delete ??')
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
    //    console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 ) {
                alert('Delete item successfully');
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            }
        })
        }

    }

    return (
        <div className="user">
            <h1>Available users are: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li
                    key={user._id}>
                       <h4 className="bg-dark text-light">Tour Details</h4>  <br /> 
                          <h6>{user.name}</h6> 
                       
                       <p>{user.details}</p>
                       <button onClick={() => handleDeleteUser(user._id)}>Cancel Order</button> <br />

                    </li> )
                }
            </ul>
        </div>
    );
};

export default Users;