import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth'
const Review = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {

        fetch('https://peaceful-reef-33113.herokuapp.com/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
           

            if(result.insertedId){
                swal({
                    title: "Thanks For Awsome Review!",
                    text: "Your Reviews Added Successfully!",
                    icon: "success",
                    button: "Aww yiss!",
                  });

                reset();

            }    

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