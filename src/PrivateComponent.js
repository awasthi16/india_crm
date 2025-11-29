import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {

 console.log("🔍 PrivateComponent is rendering");
  const auth = JSON.parse(localStorage.getItem("user"));
  console.log("Auth:", auth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateComponent