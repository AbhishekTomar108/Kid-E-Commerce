import React, { useState } from 'react'
import LoginContext from './LoginContext'

const LoginState = (props) => {

    const [user, setUser] = useState({
      name:"",
      email:"",
    });
    const [productname, setproductname] = useState();


    const updateUser = (data)=>{
        setUser({...user, name:data.name, email:data.email});
    }
    const updateproductname = (data)=>{
      localStorage.setItem( 'product', data );
      setproductname(data);
    }

  return (
    <LoginContext.Provider value={{user, updateUser, productname, updateproductname}}>
    {props.children}
</LoginContext.Provider>
  )
}

export default LoginState