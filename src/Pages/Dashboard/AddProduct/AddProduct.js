import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
   const onSubmit = data => {
       fetch('http://localhost:5000/products',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=> res.json())
       .then(result=>{})
       console.log(data);
    
   }

    return (
        <div>
            <form className="text-center"  onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center text-muted mt-5 mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
            Add A New Product In Store</span></h3>

            <input placeholder="Enter Product Name" required style={{margin:'30px',height:'50px'}} {...register("productName")} />
            <input placeholder="Enter Product Description" required style={{margin:'30px',height:'50px'}} {...register("productDescription")} />
            <input placeholder="Enter Valid Img URl" required style={{margin:'30px',height:'50px'}} {...register("productImg")} />
            <input placeholder="Enter Product Price" required type="number" style={{margin:'30px',height:'50px'}} {...register("productPrice")} />
            
            
            <input className="w-50 mx-auto mt-5" value="Add New Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;