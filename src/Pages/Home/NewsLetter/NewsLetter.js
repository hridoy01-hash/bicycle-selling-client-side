import React from 'react';
import { Container,Button } from 'react-bootstrap';
import './NewsLetter.css';
import Slide from 'react-reveal/Slide';

const NewsLetter = () => {
    return (
        <div>
            <Container>
            <p className="text-center text-success mt-5 "><hr /></p>
           <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}><i className="fas fa-envelope-open-text"></i> Newsletter </span></h3>
            </Container>
            <div className="subscribe">
            <div className="iteam text-center ">
            <Slide top>
            <i className="airplan fas fa-biking"></i>
         </Slide>
           
            <h4>Enter Your Email And Well Send You A Coupon With 10% Off Your Next Order</h4>
            <input placeholder="Your Name " type="text" className="ip2 mt-2"/>
            <input placeholder="Your Email" type="text" className="ip2"/> <br />
            <Button style={{color:"white"}} className="fw-bold text-center mt-3" variant="outline-dark">Ride More <i className="fas fa-paper-plane"></i></Button>
            </div>

            </div>
        </div>
    );
};

export default NewsLetter;