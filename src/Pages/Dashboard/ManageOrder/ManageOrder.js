import React,{useState,useEffect} from 'react';
import MyOrderTable from '../MyOrderTable/MyOrderTable';

const ManageOrder = () => {
    const [myOrders,setMyorders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setMyorders(data));
    },[myOrders])
    return (
        <div>
            <h3 className="text-center text-muted mb-5 mt-3"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Total Order : </span> {myOrders.length}</h3>

            {
                myOrders.map(myOrder=><MyOrderTable myOrder={myOrder} key={myOrder._id}></MyOrderTable>)
            }
            
        </div>
    );
};

export default ManageOrder;