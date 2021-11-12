import { CardContent,Typography,CardActionArea,Card,CardMedia,Button,CardActions} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import swal from 'sweetalert';

const BuyNow = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(result => setProduct(result))
    },[]);
    const {user} = useAuth();
    const {productName,productDescription,productImg,productPrice} = product;

    const { register, handleSubmit,reset } = useForm();
   const onSubmit = data => {
       console.log(data);
    const {customername,email,phone,address} = data;
    const newOrder = {customername,email,phone,address,product}
    newOrder.status = 'pendening'
       fetch('http://localhost:5000/orders',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(newOrder)
       })
       .then(res=>res.json())
       .then(result=>{
        if(result.insertedId){
          swal({
              title: "Order Placed Success!",
              text: "Thanks For Your Order!",
              icon: "success",
              button: "Aww yiss!",
            });

          reset();

      }  
       })
   }
    return (
        <div>
            <Header></Header>
            <Container>
         <div>
        <div className="row">
            <div className="col-md-4">

            <Card sx={{ maxWidth: 345,mt:5, boxShadow: 3,textAlign:'center',mb:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={productImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: ${productPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDescription}
          </Typography>
          <Link to="/home"><Button sx={{mt:5}} variant="contained">Choose Another</Button></Link>
        </CardContent>
      </CardActionArea>
      
    </Card>

            </div>
            <div className="col-md-8" style={{display:'flex',}}>
                
            <form className="text-center"  onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center text-muted mt-5 mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
            Provide Your Information for Fastest Delivery</span></h3>
            <input style={{margin:'30px',height:'50px'}}  defaultValue={user.displayName} {...register("customername", { required: true, maxLength: 20 })} />
            <input style={{margin:'30px',height:'50px'}} defaultValue={user.email} {...register("email", { required: true })} />
            <input style={{margin:'30px',height:'50px'}} required placeholder="Enter Phone Number" type="number" {...register("phone")} />
            <input style={{margin:'30px',height:'50px'}} required placeholder="Enter Your Valid Address" {...register("address")} />
            
            <input className="w-50 mx-auto" value="Order Now" type="submit" />
            </form>

            </div>
        </div>
        


           
        </div>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default BuyNow;