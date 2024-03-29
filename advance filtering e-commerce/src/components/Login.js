import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../Reducer/userSlice'
import './login.css'


export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = ()=>{
    dispatch(loginUser())
    navigate("/")
  }
  return (
    <div className='containerForm'>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Email </label><br/>
        <input type="text" className='navSearch' placeholder='Enter email'/><br/>
        <label>Password: </label><br/>
        <input type="password"  className='navSearch' placeholder='Enter password'/><br/>
          <button type="submit" className='loginbtn' style={{margin:5}}> Login</button>
      </form>
    </div>
  )
}
