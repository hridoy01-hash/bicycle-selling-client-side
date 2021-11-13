import React from 'react';
import { Navbar,Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-removebg-preview.png'

const Header = () => {

    const {user,logout} = useAuth();
    
    return (
     
        <div>
     
     <Navbar collapseOnSelect expand="sm" style={{backgroundColor:'rgba(0, 128, 0, 0.596)'}} variant="light">
     <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <NavLink to="/" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white"}} >
       <img style={{height:"65px"}} src={logo} alt="" /> 
       <span className="fw-bold">Gravity Bicycle Hub</span>
    </NavLink> 
    
    {/* NavLink for Route */}

    <Navbar.Collapse id="responsive-navbar-nav" className="me-auto nav-iteam justify-content-end">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white"}}>Home</NavLink>
    
    
    <NavLink to="/exploremore" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white"}}  >Explore More</NavLink>

    
    {user.email && <NavLink to="/dashboard" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white"}} >Dashboard </NavLink>}
   
    
   
  { !user?.email? <Link to ="/login"> <Button style={{color:"white"}} variant="success">Login<i className="fas fa-sign-in-alt"></i></Button></Link>
    :
   <Button  onClick={logout} style={{color:"white"}} variant="danger">Logout-{user.displayName} <i className="fas fa-sign-out-alt"></i></Button>} 
    </Navbar.Collapse> 
    </Container> 
  </Navbar>
  
        </div>
        
    );
};

export default Header;