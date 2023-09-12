import React from 'react'
import home from '../images/home.png';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
        <div className="left">
        <img src={home} alt="Logo" />
        </div>

    <div className="right">
      <form>
            <h1>New User ?</h1>
            <div>
                {/* <p>Agency Name</p> */}
                <input type="text" name="" id="" placeholder="Enter Agency Name"/>
            </div>
            <div>
                {/* <p>Agency Mail</p> */}
                <input type="text" name="" id="" placeholder="Enter Agency ID"/>
            </div>
            <div>
                {/* <p>Agency Phone Number</p> */}
                <input type="text" name="" id="" placeholder="Enter Agency ID"/>
            </div>
            <div>
                {/* <p>Agency Password</p> */}
                <input type="text" name="" id="" placeholder="Enter Agency Password"/>
            </div>
            <div>
                {/* <p>Confirm Password</p> */}
                <input type="text" name="" id="" placeholder="Confirm Agency Password"/>
            </div>
            <button className="authbutton">Sign Up</button>

            <p>Already have an account ? LogIn</p>

            </form>
    </div>
  </div>
  );
}

export default SignUp