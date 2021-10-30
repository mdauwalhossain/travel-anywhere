import React, { useEffect, useState } from 'react';

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
        console.log(id)
         const url = `https://cryptic-springs-81955.herokuapp.com/products/${id}`;
       console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then()

    }

    return (
        <div>
            <h1>Users are:{users.length}</h1>
            <ul>
                {
                    users.map(user => <li
                    key={user._id}>
                       <h6>Tour Details: {user.name}</h6> 
                       &
                       <h6>{user.email}</h6>
                       <button onClick={() => handleDeleteUser(user._id)}>Cancel Order</button>

                    </li> )
                }
            </ul>
        </div>
    );
};

export default Users;