import React from 'react'

const Login = () => {
    return (
      <div className='login'>
            <div className="login-main">
                <div className="overlay">
                    <div class="box">
                        <h4>Registration ID</h4>
                        <input type="Email" placeholder="Registration ID"/>
                        <h4> Enter your password</h4>
                        <input type="Password" placeholder="Password"/>
                        <br/>
                        <a class="forgot" href="/">Forgot your password?</a>
                        <br/>
                        <button class="log">Log in</button>
                        <hr class="left"/>
                        <hr class="right"/>
                    </div>
                </div>    
            </div>  
      </div>
    )

}

export default Login
