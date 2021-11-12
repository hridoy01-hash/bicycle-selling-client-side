import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import dashboard from '../../images/dashboard2.jpg'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Payment from './Payment/Payment';
import MyOrder from './MyOrder/MyOrder';
import Review from './Review/Review';
import useAuth from '../../hooks/useAuth';
import { Button, Paper} from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './ManageOrder/ManageOrder';
import ManageProduct from './ManageProduct/ManageProduct';
import AddProduct from './AddProduct/AddProduct';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    
  };
  const {logout,admin} = useAuth();
  console.log(admin);
  

  const drawer = (
      
    <div>
      <Toolbar>
        <Typography variant='h3'>Hello</Typography>
      </Toolbar>
      
      <Divider />
      <List>
        <ul>
        <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink to='/home'style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}}>Back Home <i class="fas fa-home"></i></NavLink></li>

        { !admin? <Box>
        <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
        to={`${url}/pay`}>Payment <i class="fab fa-cc-amazon-pay"></i></NavLink></li>

        <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
        to={`${url}/myorder`}>My Order <i class="fas fa-folder-plus"></i></NavLink></li>

        <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
        to={`${url}/review`}>Review <i class="fas fa-search"></i> </NavLink></li>
           </Box>
           :
             
         <Box>
         <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
          to={`${url}/makeadmin`}>Make Admin </NavLink></li>
         <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
          to={`${url}/manageorder`}>Manage Order </NavLink></li>
         <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
          to={`${url}/manageproduct`}>Manage Product</NavLink></li>
         <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}><NavLink style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"black",fontWeight:'bold'}} 
          to={`${url}/addproduct`}>Add Product</NavLink></li>
         </Box>}
           


          
         
            <li style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",padding:"6px",color:"white",}}> <Button variant="contained" onClick={logout} >Logout<i class="fas fa-sign-out-alt"></i></Button> </li>
   
        
        </ul>
      </List>
      <Divider />
      <List>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,mt:10, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant="h5" style={{marginLeft:'400px',fontWeight:"bold",color:'red'}}>WellCome To Your DashBoard</Typography>
        <Switch>
        <Route path={`${path}/pay`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/myorder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/manageorder`}>
          <ManageOrder></ManageOrder>
        </Route>
        <Route path={`${path}/manageproduct`}>
         <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/addproduct`}>
         <AddProduct></AddProduct>
        </Route>

      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
