import React,{useState,useEffect} from 'react';
import ManageOrderTable from '../ManageOrderTable/ManageOrderTable';


const ManageOrder = () => {
    const [myOrders,setMyorders] = useState([]);
    useEffect(()=>{
        fetch('https://peaceful-reef-33113.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setMyorders(data));
    },[myOrders])
    return (
        <div>
            <h3 className="text-center text-muted mb-5 mt-3"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Total Order : </span> {myOrders.length}</h3>

            {
                myOrders.map(myOrder=><ManageOrderTable myOrder={myOrder} key={myOrder._id}></ManageOrderTable>)
            }
            
        </div>
    );
};

export default ManageOrder;