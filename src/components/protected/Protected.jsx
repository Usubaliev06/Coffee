import React from 'react';
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Protected = ({children}) => {

const authStatus = useSelector((state) => state.auth)

console.log(authStatus)

if (!authStatus.auth){
  return <Navigate to='/adminlogin' replace/>
} 
return children

}

export default Protected;
