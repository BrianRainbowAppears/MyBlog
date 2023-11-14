import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
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
      await axios.post('/auth/login', inputs)
      navigate('/')
    } catch(err) {
      setErr(err.response.data)
      console.log(err);
    }
  }
  return (
    <div className='auth'>
      <h1>登录</h1>
      <form action="">
        <input required type="userName" placeholder='账号' name='username' onChange={handleChange} />
        <input required type="password" placeholder='密码' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>登录</button>
        {err && <p>{err}</p>}
        <span>你没有账号吗，点这里注册呦！<Link to='/register'>注册</Link></span>
      </form>
    </div>
  )
}
