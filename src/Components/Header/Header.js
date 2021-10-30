import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'



const Header = () => {

    const {user, logOut} =useFirebase();


    return (
        <div className="menu-bar">
             <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand className="bg-success px-2" to="/home"><img src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Solo.png" alt="" /></Navbar.Brand>
                        <Nav className="links me-center ">
                            <NavLink to="/home">Home</NavLink>                            
                            <NavLink to="/order">My Order</NavLink>                            
                            <NavLink to="/details">Details</NavLink>
                            <NavLink to="/offers">Offers</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                            <NavLink to="/users">Users</NavLink>
                            
                            { 
                            user.displayName?
                            <button className="bg-info" onClick={logOut}>Log out</button>
                            :
                            <NavLink to="/login">Login</NavLink>}
                             <span style={{color:'goldenrod', padding: '5px'}}>{user.displayName}</span>
                        </Nav>
                    </Container>
                </Navbar>    
    
        </div>
    );
};

export default Header;