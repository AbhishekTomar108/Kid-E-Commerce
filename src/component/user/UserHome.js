import React from 'react'

const UserHome = () => {

    const logoutHandle =()=>{
        localStorage.clear("KidsCommerce")
        localStorage.clear("username")
    }

  return (
    <div className='container' onClick={logoutHandle}>Logout</div>
  )
}

export default UserHome