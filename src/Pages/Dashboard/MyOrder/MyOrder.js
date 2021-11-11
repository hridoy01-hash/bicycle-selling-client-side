import React,{useEffect, useState}from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
import MyOrderTable from '../MyOrderTable/MyOrderTable';

const MyOrder = () => {
    const [myOrders,setMyorders] = useState([]);
    const {user} = useAuth();
    const email = user.email;
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res=>res.json())
        .then(result=>setMyorders(result))
    },[email,myOrders])
    return (
        <div>
           <Container>
            <h3 className="text-center text-muted mb-5 mt-3"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>My Order </span> DashBoard</h3>
            <p className="text-center  mb-5 mt-3">Total Order: {myOrders.length} </p>
           
            {
                myOrders.map(myOrder => <MyOrderTable myOrder={myOrder} key={myOrder._id}></MyOrderTable>)
            }
            </Container>
        </div>
    );
};

export default MyOrder;