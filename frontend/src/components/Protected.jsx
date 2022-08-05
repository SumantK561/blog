import React, { useEffect } from 'react';
import { useNavigate, useParams,Navigate,Outlet } from 'react-router-dom';


const Protected = ({prop}) => {
    const {id} = useParams() 
    const navigate = useNavigate();

    const token = JSON.parse(localStorage.getItem('token'));

    let auth = {'token':token.token};


    useEffect(()=>{
    if(prop === "dashboard"){
        if (token.length === 0 || token === undefined) {
           navigate("/login");
        } else {
            navigate(`/Dashboard/${token.userId}`);
            
        }
    }

   
},[])
  return (
   <>
   {
    auth.token ? "" : alert("Login To Access This Section...")
   }
   {
       
   auth.token ? <Outlet/> :( <Navigate to="/login"/>)
   }
   </>
  )
}

export default Protected