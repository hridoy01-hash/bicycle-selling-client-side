import React from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';


const MyOrderTable = (props) => {
    const {email,_id,status} =  props.myOrder

    const handleDelete=id=>{
     /*  fetch(`https://peaceful-reef-33113.herokuapp.com/orders/${id}`,{
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res=>res.json()
      .then(result=>{
      }))

    }; */

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`https://peaceful-reef-33113.herokuapp.com/orders/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      
    })
      .then((res) => res.json())
      .then((result) => {
           
      });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
     
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
      <td> <button className="btn btn-warning ">{status}</button> 
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

export default MyOrderTable;