import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './MyOrder.css';

const MyOrder = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    
    return (
        <div>
            <div className="add-service">
                <br />
                <h2>Fill up the Form, please</h2> <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <textarea {...register("description")} placeholder="Description" />
                        <input type="number" {...register("price")} placeholder="Price" />
                        <input {...register("img")} placeholder="Image URL" />
                        <input type="submit" />
                    </form>
            </div>
        </div>
    );
};

export default MyOrder;