import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowProducts from '../ShowProducts/ShowProducts';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result =>setProducts(result))
    },[products]);
    return (
        <div>
            <Container>
         <p className="text-center text-success  "> <hr /></p>
       
         <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
              <i className="fas fa-biking"></i> Manage Product</span></h3>
   
         
            <Row xs={1} md={3} className="g-4">
            {
                products.map((product)=><ShowProducts product={product} key={product._id} ></ShowProducts>)
            }

           </Row>
           </Container>
        </div>
    );
};

export default ManageProduct;