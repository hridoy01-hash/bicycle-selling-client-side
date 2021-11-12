import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center text-danger">
           <h3 className="text-center text-danger">404</h3>
           <h5 className="text-center text-warning">OPPS SORRY!!! PAGE NOT FOUND</h5>
           <Link to="/home"><button className="btn btn-success">Back Home</button></Link>
        </div>
    );
};

export default NotFound;