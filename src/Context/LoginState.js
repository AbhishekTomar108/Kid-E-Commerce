import React, { useState } from 'react'
import LoginContext from './LoginContext'

const LoginState = (props) => {

    const [username, setUserName] = useState("Account");


    const updateUser = (data)=>{
        setUserName(data);
    }

  return (
    <LoginContext.Provider value={{username, updateUser}}>
    {props.children}
</LoginContext.Provider>
  )
}

export default LoginState