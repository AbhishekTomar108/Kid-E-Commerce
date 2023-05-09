import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return(
    <div className='login'>
    <div className='login-form'>
      <h2>Sign Up</h2>

      <form>
        <label>First Name</label>
        <input type='text' required/>
        <label>Last Name</label>
        <input type='text' required/>
        <label>Email</label>
        <input type='email' required/>

        <label>Password</label>          
        <input type='password' required/>

  <div className='submit-btn-container flex-col'>
        <button type='submit' className='submit-btn'> SIGN IN</button>
        <span style={{color:'#00bcb4'}}> <Link to="../account"> Log in with an existing account <b style={{color:'black'}}>or</b> Return to Store </Link></span>
        </div>
                  </form>
    </div>
  </div>
    )
}

export default SignUp