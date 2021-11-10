import { Button, Grid,Typography,Container} from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import login from '../../images/login.jpg'

const Login = () => {
    const {handleEmail,handlePassword,error,handleLogin,handleGoogleSignIn} = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home'

    const handleGoogleLogin = ()=>{

      handleGoogleSignIn()
      .then(result =>{
        history.push(redirectUri);
      })
    }
    const handleSignin = ()=>{

      handleLogin()
      .then(result=>{
        history.push(redirectUri);
      })

    }
    return (
        <Container>
            <Grid container spacing={2}  >
                <Grid item sx={{ mt: 8, mb:10 }} xs={12} md={6}>
                    <Typography sx={{textAlign:'center'}} variant="body1" gutterBottom><h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>Login Please </span></h3></Typography>
                    <p className="text-center text-danger mt-5 "><hr /></p>
                    <Box sx={{textAlign:'center'}}>
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

                           <p className="text-danger">{error}</p>

                           <Button onClick={handleSignin} sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                      
                      <NavLink
                          style={{ textDecoration: 'none' }}
                          to="/register">
                          <Button variant="text">New User? Please Register</Button>
                      </NavLink>
                      <p>------------------------</p>
                  <Button onClick={handleGoogleLogin} variant="contained">Google Sign In</Button>
                    </Box>
                   
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;