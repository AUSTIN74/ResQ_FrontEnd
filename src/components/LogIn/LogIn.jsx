import React from 'react'
import './LogIn.css'
import home from '../images/home.png';

const LogIn = () => {
  return (
    <div className="container">
        <div className="left">
        <img src={home} alt="Logo" />
        </div>
      <div className="right">
        <form>
          <div className="logtext">
            <h1>Welcome to ResQ :)</h1>
            <p>ResQ: Where compassion meets action, saving lives one rescue at a time</p>
          </div>
          <div>
            {/* <p>Agency Name</p> */}
            <input type="text" name="" id="" placeholder="Enter Agency Name"/>
          </div>
          <div>
            {/* <p>Agency ID</p> */}
            <input type="text" name="" id="" placeholder="Enter Agency ID"/>
          </div>
          <div>
            {/* <p>Agency Password</p> */}
            <input type="text" name="" id="" placeholder="Enter Agency Password"/>
          </div>

          <div className="remndfor">
            <div className="check">
                <input type="checkbox" name="remember" checked="checked" />
                <label for="remember">Remember Me</label>
            </div>
            <div>
              <p>Forget Password ?</p>
            </div>
          </div>

          <p>Don't have an account ? SignUp</p>

          <div className="buttons">
            <button className="logbutton">Log In</button>
            <button className="createbutton">Create Account</button>
          </div>

          
          <div className="social">
            <div>
              <p>or sign with</p>
            </div>
            <div className="buttons">
            <button className="socbutton g">Google</button>
            <button className="socbutton f">Facebook</button>
            <button className="socbutton t">Twitter</button>

            </div>
          </div>
          

          </form>
      </div>
    </div>
  )
}

export default LogIn;