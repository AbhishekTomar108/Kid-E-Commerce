import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginContext from '../../Context/LoginContext'

const SignUp = () => {
  const [user, setUser] = useState({firstname:"", lastname:"", email:"", password:"",confirmpassword:""})
  let navigate = useNavigate();
  const ContextValue = useContext(LoginContext);

  const submitHandle = async(e)=>{
    e.preventDefault();
    if(user.password===user.confirmpassword)
     {
     const response = await fetch("http://localhost:5000/api/auth", {
       method: 'POST', 
       
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({name:user.firstname,email:user.email,password:user.password}) 
        
     });
     const json = await response.json();
     console.log(json);
     if(json.success)
     {
      console.log('json success')
      navigate('/');
      ContextValue.updateUser(json.user.name);
       localStorage.setItem('KidsCommerce', json.authToken);
      
 
       console.log("success is true");
     }
     else{
       console.log("success is false");
      
       

     }
 }
 else{
  console.log("password must be same");
 }
  }
    return(
    <div className='login'>
    <div className='login-form'>
      <h2>Sign Up</h2>

      <form onSubmit={e=>submitHandle(e)}>
        
        <label>First Name</label>
        <input type='text' name="firstname" required onChange={e=> setUser({...user,[e.target.name]:e.target.value})}/>
        <label>Last Name</label>
        <input type='text' name="lastname" required onChange={e=> setUser({...user,[e.target.name]:e.target.value})}/>
        <label>Email</label>
        <input type='email' name="email" required onChange={e=> setUser({...user,[e.target.name]:e.target.value})}/>

        <label>Password</label>          
        <input type='password' name="password" required onChange={e=> setUser({...user,[e.target.name]:e.target.value})}/>
        <label>Confirm Password</label>          
        <input type='password' name="confirmpassword" required onChange={e=> setUser({...user,[e.target.name]:e.target.value})}/>

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