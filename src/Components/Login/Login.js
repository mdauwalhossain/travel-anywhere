import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useFirebase from "../Hooks/useFirebase";



 const Loginn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { signInUsingGoogle} = useFirebase(); 
  const {emaill} = useFirebase();

  // const auth = getAuth();

  
  const handleEmailChange = e => {
    setEmail(e.target.value);
}

const handlePasswordChange = e =>{
    setPassword(e.target.value)

}

  const handleLogIn = (e) =>{
    e.preventDefault();
   emaill(email, password)
  }

  let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   

  return (
    <div className="log">
    <h1 className="text-success">Wanna something more...</h1>
    <div className=" ">
      
      <div className="col-md-12">
        <div>
         <form onSubmit={handleLogIn}>
         <div className="form-input mt-5">
          <h2>Login</h2>
            <input 
            onBlur={handleEmailChange}             
              className="mt-2 p-2"
              type="email"
              placeholder="Email"
            />
            <br />
            <input
            onBlur={handlePasswordChange}
              className="mt-2 p-2"
              type="password"
              placeholder="Password"
            />
            <br />
            <div className="login-regiater-btn mt-4">
             
              <button className="btn btn-primary text-light ms-1">
                Login
              </button>
            </div>
          </div>
         </form>
          <div className="login-btn mt-4">
            <button
              onClick={
              ()=>signInUsingGoogle(history, from) }
              className="btn btn-warning m-2"
            >
              Google sign in
            </button>
           
            <p className="">New in Dental Care?? <Link to="/register" style={{ textDecoration: 'none', color:"red"}}>Register Here</Link> </p>
          </div>
        </div>
      </div>
     
    </div>
    <br />
  </div>
);
};

 export default Loginn;