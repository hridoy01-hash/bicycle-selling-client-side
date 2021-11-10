import React from 'react';
import { Container } from 'react-bootstrap';


const MyOrderTable = (props) => {
    const {email,_id,status} =  props.myOrder

    
   
    return (
        <Container>
        <div style={{overflow:'scroll'}}>
        <table class="table table-border">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">User Email</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Order Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{_id}</th>
      <td>{email}</td>
      <td>{props.myOrder?.product?.productName}</td>
      <td>$ {props.myOrder?.product?.productPrice}</td>
      <td> <button className="btn btn-warning">{status}</button> <button className="btn btn-danger">DELETE</button></td>
    </tr>
    <tr>
      
    </tr>
    <tr>
      
     
      
    </tr>
  </tbody>
</table>
        </div>
        </Container>
    );
};

export default MyOrderTable;