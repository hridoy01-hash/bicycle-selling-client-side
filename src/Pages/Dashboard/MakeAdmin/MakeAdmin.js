import { TextField,Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = (e) => {

    const [email,setEmail] = useState('');
    const handleOnblur = (e)=>{
        setEmail(e.target.value);
    }

    const handleAdmin=()=>{
        e.preventDefault();
       const user = {email}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })


        
    }
    return (
        <div>
            <h2>Make An Admin</h2>

            <form onSubmit={handleAdmin}>
            <TextField
               required
                type="email"
                onBlur={handleOnblur}
                sx={{ width: '50%', m: 1 }}
                id="outlined-basic" 
                label="Enter Email" 
                variant="outlined" />
                <Button sx={{mt:2}} type='submit' variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;