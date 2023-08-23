import React from 'react'

import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { getAllData } from "./features/gitUserSlice";
import { selectUser } from './features/userSlice';
import { Style } from '@mui/icons-material';
  
const Navbar = () => {
    const [deps, setDeps] = useState('');
  const dispatch =useDispatch();
  const user = useSelector(selectUser); //TODO: Use this anywhere you want
  const data = useSelector((state)=>{
    console.log("state..",state.app);
    return state.app
  })
  const pass = btoa(user.password);
  const DecryptPass=()=>{
    const decryptedPassword = atob(pass);
    setDeps(decryptedPassword);
  }

  const changecolor=()=>{
    document.getElementById('btn').style.backgroundColor="red"
  }
  return (
    <div>
      <div>
     <div style={{display:"flex",justifyContent:"space-between" ,padding:"10px 20px"}}>
      <h3 style={{justifyContent:"flex-start" ,display:"flex",}}>Email: {user.email}</h3>
      <h3>Password: {pass} </h3>
      </div>
      <div style={{display:"flex",justifyContent:"space-between" ,padding:"10px 20px"}}>
      <button onClick={DecryptPass}style={{padding:"10px 10px 10px 10px",borderRadius:"5px",height:'40px'}}>Decrypt your password</button>
      <h3>your decrypted password is: {deps}</h3></div>

    </div>

    </div>
  )
}

export default Navbar;
