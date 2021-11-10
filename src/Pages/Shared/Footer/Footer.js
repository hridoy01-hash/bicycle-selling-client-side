import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo-removebg-preview.png'
import './Footer.css'

const Footer = () => {
    return (
        <div  className="footer">
            <Container className="mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 text-dark">
                    <h4> Gravity Bicycle Hub</h4>
                    <img style={{width:'100px'}} src={logo} alt="" />
                    <p className="text-align-justify">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.</p>
                    
                </div>
                <div className="col-md-2 text-dark ms-5">
                  <h5>Shop By <i class="fas fa-shopping-bag"></i> <i className="fas fa-shop"></i></h5>
                  
                    <p> Your Order</p>
                    <p> Your Wishlist</p>
                    <p> Payment</p>
                    <p> Delivery</p>
                    <p> Condition</p>
                 
                </div>
                <div className="col-md-2 text-dark ms-5">
                <h5>Products <i class="fas fa-bicycle"></i></h5>
                  
                  <p> Prices drop</p>
                  <p> New Products</p>
                  <p> Best Sales</p>
                  <p> Store</p>


                </div>
                <div className="col-md-2 text-dark ms-5">
                <h5>Contact <i className="fas fa-mouse-pointer"></i></h5>
                  
                  <p> Contact:+123 456 7890</p>
                  <p> Email:info@example.com</p>
                  <p>Dhanmondi,Dhaka-1216</p>
                  Follow Us <i className="fab fa-twitter"></i> <i className="fab fa-google-plus-g"></i> <i className="fab fa-facebook-square"></i>
                </div>
            </div>
           </Container> 
           <hr />
           <div className="text-center text-dark">
               
               <p>© Copyright 2021 | Designed By <span style={{color:"red"}}>Hridoy Ahmed</span> | All Rights Reserved</p> 
              
           </div>
        </div>
    );
};

export default Footer;