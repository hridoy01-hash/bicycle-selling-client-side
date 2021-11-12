import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';


const ShowProducts = (props) => {
    const {productName,productDescription,productImg,productPrice,_id} = props.product;

const handleProductDelete =id=>{
   
  fetch(`http://localhost:5000/products/${id}`,{
    method:'DELETE',
    headers:{
      'content-type':'application/json'
    },
  })
  .then(res=>res.json())
  .then(result =>{})


}

    return (
        <div>
           
          <Col>
      <Card className="text-center shadow mb-3 bg-body rounded" style={{minHeight:"400px"}}>
       <div className='img-parent'><Card.Img className='cart-img' variant="top" src={productImg} style={{height:"200px"}} /></div>
        <Card.Body>
          <Card.Title className="fw-bold">{productName}</Card.Title>
          <Card.Title className="fw-bold text-success">Price $ {productPrice}</Card.Title>
          <Card.Text className="text-justify text-muted">
            {productDescription.slice(0,150)}
          </Card.Text>
       
       
       <Button onClick={()=>handleProductDelete(_id)} style={{width:'100%',fontWeight:'bold'}} variant="outline-success"><i class="fas fa-trash"></i> DELETE PRODUCT </Button>
       
       
       
   
        </Card.Body>
      </Card>
    </Col>
       
        </div>
    );
};

export default ShowProducts;