import { Button } from 'bootstrap';
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const [error,setError] = useState(false);
  return (
    <div>
      <div className='container'>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="username" value=""/>
              <label htmlFor="floatingInput">username</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value=""/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit" disabled>Sign in</button>
            <p className='text-danger' data-testid="error" style={{visibility:error ? 'visible':'hidden'}}>Something went wrong</p>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Login
