import { CardContent,Typography,CardActionArea,Card,CardMedia,Button,CardActions} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const BuyNow = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(result => setProduct(result))
    },[]);
    const {productName,productDescription,productImg,productPrice} = product;

    const { register, handleSubmit } = useForm();
   const onSubmit = data => console.log(data);
    return (
        <Container>
         <div>
        <div className="row">
            <div className="col-md-6">

            <Card sx={{ maxWidth: 345,mt:5, boxShadow: 3,textAlign:'center',mb:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
          <Button sx={{mt:5}} variant="contained">Choose Another</Button>
        </CardContent>
      </CardActionArea>
      
    </Card>

            </div>
            <div className="col-md-6">

            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
            </form>

            </div>
        </div>
        


           
        </div>
        </Container>
    );
};

export default BuyNow;