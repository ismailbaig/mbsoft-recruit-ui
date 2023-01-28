import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
  const [username,usernameUpdate] = useState('');
  const [password,passwordUpdate] = useState('');

  const proceedLogin = (e) =>{
    e.preventDefault();
    if(validate()){
      console.log('proceeded');
    }
  }

  const validate = () =>{
    let result = true;
    if(username === '' || username ===null){
      result = false;
      toast.warning('please enter username');
    }
    if(password === '' || password ===null){
      result = false;
      toast.warning('please enter password');
    }
    return result;
  }
  return (
   <>

   <div className="row">
    <div className="offset-lg-3 col-lg-5" style={{marginTop:'100px'}}>
      <form className="container">
        <div className="card">
          <div className="card-header">
          <h2>User Login</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>User Name <span className='errmsg'>*</span></label>
            <input value={username} onChange={e => usernameUpdate(e.target.value)} className='form-control'></input> 
          </div>
          <div className="form-group">
            <label>Password <span className='errmsg'>*</span></label>
            <input value={password} onChange={e => passwordUpdate(e.target.value)} className='form-control'></input> 
          </div>
        </div>
        <div className="card-footer">
          <button type='submit' className='btn btn-primary mx-2'>Login</button>

          <Link className='btn btn-success' to={'/register'}>New User</Link>
        </div>
        </div>
      </form>
    </div>
   </div>

   </>
  )
}

export default Login