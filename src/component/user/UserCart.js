import React, { useEffect } from 'react'

const UserCart = () => {

    useEffect(()=>{

        fetchuserDetails();
    },[])

    const fetchuserDetails = async()=>{
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
       method: 'GET', 
       
       headers: {
         'Content-Type': 'application/json',
         'auth-token': localStorage.getItem('KidsCommerce')
       },
 
      
        
     });

     const json = await response.json();

     if(json.success){
        console.log('user = ',json.user);
     }

     else{
        console.log('error = ',json.error); 
        alert(json.error) 
     }
    }
  return (
    <div className='container'>UserCart</div>
  )
}

export default UserCart