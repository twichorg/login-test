import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import  "./Login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState({});
  const [loading,setLoading] = useState(false);
  const handleClick = async (e) => {
     e.preventDefault();
     setLoading(true);
      try{
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1")
          setUser(data);
      }
      
      catch(err){
        setError(true);
      }
  }
  return (
   <div className='container'>
   <span className='user'>{user.name}</span>
    <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
        disabled={!username || !password}
        onClick={handleClick} >
            {loading ? "Please wait..." : "Login"}
        </button>
        <span 
        data-testid="error"
        style={{ visibility: error ? "visible" : "hidden" }}
        >
        Something Wrong Please Again
        </span>
      </form>
      </div>
  )
}

export default Login