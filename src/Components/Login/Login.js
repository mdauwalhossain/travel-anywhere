import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useFirebase from "../Hooks/useFirebase";

 const Login = () => {
   const { signInUsingGoogle} = useFirebase();  
  let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   

  return (
    <div className="log">
    <h1 className="text-success">Login</h1>
    <div className=" ">
      
      <div className="col-md-12">
        <div>        
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
         
          <div className="login-btn mt-4">
            <button
              onClick={
              ()=>signInUsingGoogle(history, from) }
              className="btn btn-warning m-2"
            >
              Google sign in
            </button>           
            <p className=""> <br /> New in Dental Care?? <Link to="/register" style={{ textDecoration: 'none', color:"red"}}>Register Here</Link> </p>
          </div>
        </div>
      </div>     
    </div>
    <br />
    <img src="https://i.stack.imgur.com/C5OQ4m.png" alt="" />
  </div>
);
};

 export default Login;