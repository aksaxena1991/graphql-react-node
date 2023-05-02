import React, { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword]= useState("")

  
  
  return (
    <>
    
      <div className='createUser'>
        <input type='text' placeholder='Your name' onChange={(e)=>setName(e.target.value)} />
        <input type='text' placeholder='Your username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type='text' placeholder='Your password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>console.log(name,username,password)}>Create User</button>
      </div>
    
    </>
  );
}

export default App;
