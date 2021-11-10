import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Service = (props) => {
    const {productName,productDescription,productImg,productPrice,_id} = props.product
    return (
        <div>
          <Fade right>
          <Col>
      <Card className="text-center shadow mb-3 mt-3 bg-body rounded" style={{minHeight:"400px"}}>
       <div className='img-parent'><Card.Img className='cart-img' variant="top" src={productImg} style={{height:"200px"}} /></div>
        <Card.Body>
          <Card.Title className="fw-bold">{productName}</Card.Title>
          <Card.Title className="fw-bold text-success">Price $ {productPrice}</Card.Title>
          <Card.Text className="text-justify text-muted">
            {productDescription.slice(0,150)}
          </Card.Text>
       <Link to={`/service/${_id}`} >
       <Button  style={{width:'100%',fontWeight:'bold'}} variant="outline-success"><i class="fas fa-shopping-cart"></i> Buy Now </Button>
       </Link>
       
   
        </Card.Body>
      </Card>
    </Col>
        </Fade>
            
        </div>
    );
};

export default Service;