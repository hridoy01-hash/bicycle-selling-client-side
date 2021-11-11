import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import { Container, Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const ExploreMore = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result =>setProducts(result))
    },[])
    return (
        <div>
            <Header></Header>
            <Container>
         <p className="text-center text-success"> <hr /></p>
         <Slide top>
         <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
              <i className="fas fa-biking"></i> Featured Product</span></h3>
        </Slide>
         
            <Row xs={1} md={3} className="g-4">
            {
                products.map((product)=><Service product={product} key={product._id} ></Service>)
            }

           </Row>
           </Container>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMore;