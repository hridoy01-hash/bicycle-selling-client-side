import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import BuyNow from './Pages/BuyNow/BuyNow';
import Dashboard from './Pages/Dashboard/Dashboard';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path="/exploremore">
            <ExploreMore></ExploreMore>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/service/:id">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
