import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { getAllData } from "./features/gitUserSlice";
import { selectUser } from './features/userSlice';
import { Style } from '@mui/icons-material';



const GitUsers = () => {
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

      <button onClick={()=> dispatch(getAllData())} style={{padding:"10px 10px 10px 10px",borderRadius:"5px",marginLeft:"45%"}}>Get github user</button>
      <div style={{display: 'flex', flexWrap:'wrap' ,flexDirection:"row"}}>
        {data.users.map((ele)=>( 
        <div id="btn" key={ele.id} style={{display: 'flex', flexWrap:'wrap', margin: "10px"}} >
          <button id="btn" style={{border:"1px solid black", padding: "10px"}} onClick={changecolor} >
          {ele.login}
          </button>
        </div>
        ))}
        </div>
      
        
    </div>
  )
}

export default GitUsers;







