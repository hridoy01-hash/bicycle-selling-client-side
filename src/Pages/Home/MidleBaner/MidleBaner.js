import React from 'react';
import './MidleBaner.css';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';


const MidleBaner = () => {
    return (
        <div>
             <div className="parent mb-5 mt-3">

<div className="d-flex text-center justify-content-center align-items-center h-100">
<div>

<LightSpeed right>
<h3 style={{fontFamily:'cursive'}} className="text-white">“It is by riding a bicycle that you learn the contours of a country best, since you have to sweat up the hills and coast down them.”-Ernest Hemingway.</h3> 
</LightSpeed>


<div>
<Slide left>
<button className="btn btn-success m-3">RIDE WITH GRAVITY</button>
</Slide>

<Slide right>
<button className="btn btn-success m-3">READ BLOG</button>
</Slide>

</div>
</div>
</div>

</div>
            
        </div>
    );
};

export default MidleBaner;