import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='login-form'>
        <h2>Login</h2>

        <form>
          <label>Email</label>
          <input type='email' required/>

          <label>Password</label>          
          <input type='password' required/>

    <div className='submit-btn-container'>
          <button type='submit' className='submit-btn'> SIGN IN</button>
          <span style={{color:'#00bcb4'}}> <Link to="/signup"> Create Account </Link></span>
          </div>
                    </form>
      </div>
    </div>
  )
}

export default Login