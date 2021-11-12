import { Grid,Typography,TextField,Box,Container,Button} from '@mui/material';
import React from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import register from '../../images/registration.jpg'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Registration = () => {
    const {handleName,handleEmail,error,handlePassword,handleSignup,handleGoogleSignIn} = useAuth();

    const history = useHistory();
    const location = useLocation();
    const userRegister =(e)=>{
        e.preventDefault();
       handleSignup(history,location);
    }
    
    return (
       <div>
           <Header></Header>
            <Container>
            <Grid container spacing={2}  >
                <Grid item sx={{ mt: 5, mb:10 }} xs={12} md={6}>
                    <Typography sx={{textAlign:'center'}} variant="body1" gutterBottom><h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>Registration Please </span></h3></Typography>
                    <p className="text-center text-danger mt-5 "><hr /></p>
                    <Box sx={{textAlign:'center'}}>
                          <form onSubmit={userRegister}>
                           <TextField 
                            required
                            onBlur={handleName}
                            type="text"
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic" 
                            label="Enter Name" 
                            variant="outlined" />
                            <TextField 
                            required
                            onBlur={handleEmail}
                            type="email"
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic" 
                            label="Enter Email" 
                            variant="outlined" />
                            <TextField
                            required 
                            onBlur={handlePassword}
                            type="password"
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic" 
                            label="Enter Password" 
                            variant="outlined" />
               
                        <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                        </form>
                        
                       <p className="text-danger">{error}</p>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                        <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

                    </Box>
                   
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>
            </Grid>
        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Registration;