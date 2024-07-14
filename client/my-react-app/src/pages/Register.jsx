import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {apiClient} from "../utils/api";

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await apiClient.post('/auth/register', inputs)
      navigate('/login')
    } catch(err) {
      setErr(err.response.data)
      console.log(err);
    }
  }

  return (
    <div className='auth'>
      <h1>注册</h1>
      <form action="">
        <input required type="userName" placeholder='账号' name='username' onChange={handleChange} />
        <input required type="email" placeholder='邮箱' name='email' onChange={handleChange} />
        <input required type="password" placeholder='密码' name='password' onChange={handleChange} />
        <button onClick={handleSubmit} >注册</button>
        {err && <p>{err}</p>}
        <span>已注册账号，点这里登录呦！<Link to='/login'>登录</Link></span>
      </form>
    </div>
  )
}