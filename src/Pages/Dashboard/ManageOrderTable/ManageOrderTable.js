import React from 'react';
import { Container } from 'react-bootstrap';


const ManageOrderTable = (props) => {
    const {email,_id,status} =  props.myOrder

    const handleDelete=id=>{

      fetch(`http://localhost:5000/orders/${id}`,{
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res=>res.json()
      .then(result=>{

      }))

    };

    const handleUpdate=id=>{
       
      fetch(`http://localhost:5000/orders/${id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res=>res.json()
      .then(result=>{

      }))

      

    }
    
   
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
      <td> <button onClick={()=>handleUpdate(_id)} className="btn btn-warning ">{status}</button> 
      <button onClick={()=>handleDelete(_id)} className="btn btn-danger ms-3">DELETE</button></td>
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

export default ManageOrderTable;