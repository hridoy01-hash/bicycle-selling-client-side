import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'
const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{

        })

    }
    const {user} = useAuth();
    return (
        <div>
            <h3 className="text-center text-muted mt-5 mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
            Put A Review </span></h3>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input required defaultValue={user.displayName} {...register("name")} style={{margin:'30px',height:'50px'}} />
                <input required placeholder="Say Something About Us" {...register("description")} style={{margin:'30px',height:'50px'}} />
                <input required placeholder="Enter Review Value(0-5)" type="number" {...register("rating")} style={{margin:'30px',height:'50px'}} />
                <input className="w-50 mx-auto mt-5 ms-5" value="Make Review" type="submit" />
          </form>
        </div>
    );
};

export default Review;