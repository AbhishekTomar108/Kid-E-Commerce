import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../../Context/LoginContext'


const UserHome = () => {
  const ContextValue = useContext(LoginContext);
  let navigate = useNavigate();

    const logoutHandle =()=>{
        localStorage.clear();
        ContextValue.updateproductname('')
        localStorage.setItem('userStatus',false)
        navigate('/');
    }

  return (
    <div className='container' onClick={logoutHandle} style={{cursor:"pointer"}}>Logout</div>
  )
}

export default UserHome