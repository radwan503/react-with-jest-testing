
import { Button } from 'bootstrap';
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Login = () => {

  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [user,SetUser] = useState({});

  const handleClick =async(e)=>{
    e.preventDefault();
    setLoading(true)
    try{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      SetUser(data)
    }catch{
      setError(true)
    }
    setLoading(false)
  }

  return (
    <div>
      <div className='container'>
        <main className="form-signin w-100 m-auto">
          <form autoComplete=''>
            <h1 className="h3 mb-3 fw-normal">Please sign in {user.name}</h1>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="username" value={username}
              onChange={(e)=>setUsername(e.target.value)}/>
              <label htmlFor="floatingInput">username</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit" disabled={!username || !password} onClick={handleClick}>{loading?"please wait":"Login"}</button>
            <p className='text-danger' data-testid="error" style={{visibility:error ? 'visible':'hidden'}}>Something went wrong</p>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Login
