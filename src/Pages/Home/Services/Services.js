import React,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Slide from 'react-reveal/Slide';


const Services = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result =>setProducts(result))
    },[])
    return (
        <div>
            <Container className="mt-5">
         <p className="text-center text-success mt-5 "> <hr /></p>
         <Slide top>
         <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
              <i className="fas fa-biking"></i> Featured Product</span></h3>
        </Slide>
         
            <Row xs={1} md={3} className="g-4">
            {
                products.slice(0,6).map((product)=><Service product={product} key={product._id} ></Service>)
            }

           </Row>
           </Container>
        </div>
    );
};

export default Services;