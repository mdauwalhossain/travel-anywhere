import { getAuth,} from "firebase/auth";
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import useFirebase from "../Hooks/useFirebase";


const Register = () => {  
    const {signInUsingGoogle} = useFirebase();
    const auth = getAuth();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    return (
        <div className="reg">
            <div>
                <h2 className="text-danger">Register</h2>
                <input                        
              className="mt-2 p-2"
              type="email"
              placeholder="Email"
            />
            <br />
            <input            
              className="mt-2 p-2"
              type="password"
              placeholder="Password"
            />

                <p> <br /> Already have an account? <Link to="/login" style={{ textDecoration: 'none', color:"red"}}>Login</Link> </p>
                <button onClick={
                    () => signInUsingGoogle(history, from)} className="btn btn-primary m-2">Google Sign in</button>
            </div>
            
            <img src="https://www.nicepng.com/png/detail/19-190950_register-now-icon-png.png" alt="" />
        </div>
    );
};

export default Register;