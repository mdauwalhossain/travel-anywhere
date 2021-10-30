import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Components/context/AuthProvider';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFound from './Components/NotFound/NotFound';
import Offers from './Components/Offers/Offers';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/order">
            <MyOrder></MyOrder>
          </Route>
          <Route exact path="/details">
            <Details></Details>
          </Route>
          <Route exact path="/offers">
            <Offers></Offers>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/users">
            <Users></Users>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
